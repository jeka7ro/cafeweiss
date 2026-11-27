#!/usr/bin/env python3
"""
Café Weiss Local Development & Admin API Server (Port 8305)
Serves static files and provides GET/POST /api/lunch-schedules to persist weekly lunch menus.
"""
import http.server
import json
import os
import socketserver
from datetime import datetime

PORT = 8305
DATA_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "lunch-schedules.json")
RESERVATIONS_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "reservations.json")


class CafeWeissHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def do_GET(self):
        clean_path = self.path.split("?")[0]
        if clean_path in ("/api/lunch-schedules", "/api/lunch-schedules.php"):
            try:
                with open(DATA_FILE, "r", encoding="utf-8") as f:
                    content = f.read()
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(content.encode("utf-8"))
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))
            return
        if clean_path == "/api/reservations":
            try:
                if os.path.exists(RESERVATIONS_FILE):
                    with open(RESERVATIONS_FILE, "r", encoding="utf-8") as f:
                        content = f.read()
                else:
                    content = json.dumps({"reservations": []})
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(content.encode("utf-8"))
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))
            return
        return super().do_GET()

    def do_POST(self):
        clean_path = self.path.split("?")[0]
        if clean_path == "/api/reservations":
            try:
                length = int(self.headers.get("Content-Length", 0))
                raw_body = self.rfile.read(length).decode("utf-8")
                body = json.loads(raw_body)
                store = {"reservations": []}
                if os.path.exists(RESERVATIONS_FILE):
                    try:
                        with open(RESERVATIONS_FILE, "r", encoding="utf-8") as rf:
                            store = json.load(rf)
                    except Exception:
                        store = {"reservations": []}
                if "reservations" in body and isinstance(body["reservations"], list):
                    store["reservations"] = body["reservations"]
                elif body.get("name"):
                    entry = {
                        "id": body.get("id") or f"res-{int(datetime.now().timestamp() * 1000)}",
                        "createdAt": datetime.now().isoformat(),
                        "status": body.get("status") or "new",
                        "location": body.get("location") or "Hinterbrühl",
                        "occasion": body.get("occasion") or "Tischreservierung",
                        "date": body.get("date") or "",
                        "time": body.get("time") or "",
                        "guests": body.get("guests") or "2 Personen",
                        "area": body.get("area") or "Innenbereich",
                        "name": body.get("name") or "",
                        "phone": body.get("phone") or "",
                        "email": body.get("email") or "",
                        "notes": body.get("notes") or "-",
                    }
                    store.setdefault("reservations", []).insert(0, entry)
                store["updatedAt"] = datetime.now().isoformat()
                os.makedirs(os.path.dirname(RESERVATIONS_FILE), exist_ok=True)
                with open(RESERVATIONS_FILE, "w", encoding="utf-8") as wf:
                    json.dump(store, wf, ensure_ascii=False, indent=2)
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps({"ok": True, "reservations": store["reservations"]}).encode("utf-8"))
            except Exception as e:
                self.send_response(400)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps({"ok": False, "error": str(e)}).encode("utf-8"))
            return
        if clean_path in ("/api/lunch-schedules", "/api/lunch-schedules.php"):
            try:
                length = int(self.headers.get("Content-Length", 0))
                raw_body = self.rfile.read(length).decode("utf-8")
                payload = json.loads(raw_body)

                # Validate structure
                if "schedules" not in payload or not isinstance(payload["schedules"], list):
                    raise ValueError("Invalid payload: 'schedules' list required")

                # Preserve PIN if not changing
                existing_pin = "2020"
                if os.path.exists(DATA_FILE):
                    try:
                        with open(DATA_FILE, "r", encoding="utf-8") as ef:
                            existing_data = json.load(ef)
                            existing_pin = existing_data.get("pin", "2020")
                    except Exception:
                        pass

                payload["pin"] = payload.get("pin") or existing_pin
                payload["updatedAt"] = datetime.now().isoformat()

                # Sort schedules chronologically by validFrom
                payload["schedules"].sort(key=lambda s: s.get("validFrom", ""))

                os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
                with open(DATA_FILE, "w", encoding="utf-8") as f:
                    json.dump(payload, f, ensure_ascii=False, indent=2)

                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps({"ok": True, "updatedAt": payload["updatedAt"]}).encode("utf-8"))
            except Exception as e:
                self.send_response(400)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps({"ok": False, "error": str(e)}).encode("utf-8"))
            return

        self.send_response(404)
        self.end_headers()


class ReusableTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True
    daemon_threads = True
    request_queue_size = 64


if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    with ReusableTCPServer(("0.0.0.0", PORT), CafeWeissHandler) as httpd:
        print(f"Serving Café Weiss + Admin API on http://0.0.0.0:{PORT} (LAN: http://192.168.2.57:{PORT})")
        httpd.serve_forever()

