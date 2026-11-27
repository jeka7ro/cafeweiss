const fs = require("fs");
const path = require("path");

const DATA_PATH = path.join(process.cwd(), "data", "reservations.json");
const GITHUB_REPO = process.env.GITHUB_REPO || "jeka7ro/cafeweiss";
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";
const GITHUB_FILE_PATH = "data/reservations.json";

let memoryReservations = null;

function readLocalReservations() {
  if (memoryReservations) return memoryReservations;
  try {
    if (fs.existsSync(DATA_PATH)) {
      const parsed = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
      if (parsed && Array.isArray(parsed.reservations)) return parsed;
    }
  } catch (e) {}
  return { reservations: [] };
}

async function fetchFromGitHub(token) {
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}?ref=${GITHUB_BRANCH}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "CafeWeiss-Vercel-Reservations"
    },
    cache: "no-store"
  });
  if (!res.ok) return null;
  const data = await res.json();
  if (!data || !data.content) return null;
  const decoded = Buffer.from(data.content, "base64").toString("utf8");
  return {
    sha: data.sha,
    store: JSON.parse(decoded)
  };
}

async function saveToGitHub(token, payload) {
  const current = await fetchFromGitHub(token);
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}`;
  const encoded = Buffer.from(JSON.stringify(payload, null, 2), "utf8").toString("base64");
  const body = {
    message: `New Café Weiss reservation (${new Date().toISOString().slice(0, 16)})`,
    content: encoded,
    branch: GITHUB_BRANCH
  };
  if (current && current.sha) {
    body.sha = current.sha;
  }
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "User-Agent": "CafeWeiss-Vercel-Reservations"
    },
    body: JSON.stringify(body)
  });
  return res.ok;
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  const ghToken = process.env.GITHUB_TOKEN;

  if (req.method === "GET") {
    try {
      if (ghToken) {
        const ghData = await fetchFromGitHub(ghToken);
        if (ghData && ghData.store) {
          memoryReservations = ghData.store;
          return res.status(200).send(JSON.stringify(ghData.store));
        }
      }
      return res.status(200).send(JSON.stringify(readLocalReservations()));
    } catch (err) {
      return res.status(500).send(JSON.stringify({ error: String(err.message || err) }));
    }
  }

  if (req.method === "POST") {
    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      let store = readLocalReservations();
      if (ghToken) {
        const ghData = await fetchFromGitHub(ghToken);
        if (ghData && ghData.store && Array.isArray(ghData.store.reservations)) {
          store = ghData.store;
        }
      }

      if (body && Array.isArray(body.reservations)) {
        store.reservations = body.reservations;
      } else if (body && body.name) {
        const entry = {
          id: body.id || `res-${Date.now()}`,
          createdAt: new Date().toISOString(),
          status: body.status || "new",
          location: body.location || "Hinterbrühl",
          occasion: body.occasion || "Tischreservierung",
          date: body.date || "",
          time: body.time || "",
          guests: body.guests || "2 Personen",
          area: body.area || "Innenbereich",
          name: body.name || "",
          phone: body.phone || "",
          email: body.email || "",
          notes: body.notes || "-"
        };
        store.reservations.unshift(entry);
      }

      store.updatedAt = new Date().toISOString();
      memoryReservations = store;

      let persistedToGitHub = false;
      if (ghToken) {
        persistedToGitHub = await saveToGitHub(ghToken, store);
      }

      return res.status(200).send(
        JSON.stringify({
          ok: true,
          persistedToGitHub,
          reservations: store.reservations
        })
      );
    } catch (err) {
      return res.status(400).send(JSON.stringify({ ok: false, error: String(err.message || err) }));
    }
  }

  return res.status(405).send(JSON.stringify({ error: "Method not allowed" }));
};
