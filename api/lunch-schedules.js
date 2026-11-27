const fs = require("fs");
const path = require("path");

const DATA_PATH = path.join(process.cwd(), "data", "lunch-schedules.json");
const GITHUB_REPO = process.env.GITHUB_REPO || "jeka7ro/cafeweiss";
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";
const GITHUB_FILE_PATH = "data/lunch-schedules.json";

// In-memory hot cache for warm serverless invocations
let memoryStore = null;

function readLocalBundledStore() {
  if (memoryStore) return memoryStore;
  const raw = fs.readFileSync(DATA_PATH, "utf8");
  return JSON.parse(raw);
}

async function fetchFromGitHub(token) {
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}?ref=${GITHUB_BRANCH}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "CafeWeiss-Vercel-Admin"
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
    message: `Update weekly Mittagsmenü schedule (${new Date().toISOString().slice(0, 10)})`,
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
      "User-Agent": "CafeWeiss-Vercel-Admin"
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
          memoryStore = ghData.store;
          return res.status(200).send(JSON.stringify(ghData.store));
        }
      }
      const store = readLocalBundledStore();
      return res.status(200).send(JSON.stringify(store));
    } catch (err) {
      return res.status(500).send(JSON.stringify({ error: String(err.message || err) }));
    }
  }

  if (req.method === "POST") {
    try {
      const payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      if (!payload || !Array.isArray(payload.schedules)) {
        return res.status(400).send(JSON.stringify({ ok: false, error: "Invalid schedules payload" }));
      }

      payload.pin = payload.pin || "2020";
      payload.updatedAt = new Date().toISOString();
      payload.schedules.sort((a, b) => String(a.validFrom || "").localeCompare(String(b.validFrom || "")));
      memoryStore = payload;

      if (ghToken) {
        const persisted = await saveToGitHub(ghToken, payload);
        return res.status(200).send(
          JSON.stringify({
            ok: true,
            persistedToGitHub: persisted,
            updatedAt: payload.updatedAt
          })
        );
      }

      return res.status(200).send(
        JSON.stringify({
          ok: true,
          persistedInMemory: true,
          updatedAt: payload.updatedAt
        })
      );
    } catch (err) {
      return res.status(400).send(JSON.stringify({ ok: false, error: String(err.message || err) }));
    }
  }

  return res.status(405).send(JSON.stringify({ error: "Method not allowed" }));
};
