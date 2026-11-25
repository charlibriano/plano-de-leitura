// Ler Bíblia — service worker
// Para o app abrir mesmo sem internet. Regras:
// • páginas e scripts do app: busca a versão nova na rede; sem internet, usa a guardada
//   (assim uma atualização no GitHub/Vercel chega na próxima abertura com internet)
// • textos da Bíblia (./biblia/*.json) e ícones: não mudam; usa o guardado e só baixa o que falta
// • fontes do Google: guardadas depois do primeiro uso
// • Firebase/login e qualquer outro site: não passa por aqui
const VERSAO = "lerbiblia-v1";
const APP = ["/", "/index.html", "/devocionais.js", "/manifest.json", "/icons/icon-192.png", "/icons/icon-512.png", "/icons/apple-touch-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSAO).then((c) => c.addAll(APP)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((nomes) => Promise.all(nomes.filter((n) => n !== VERSAO).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

async function redePrimeiro(req) {
  const cache = await caches.open(VERSAO);
  try {
    const resp = await fetch(req);
    if (resp && resp.ok) cache.put(req, resp.clone());
    return resp;
  } catch (err) {
    const guardado = await cache.match(req, { ignoreSearch: true });
    if (guardado) return guardado;
    if (req.mode === "navigate") {
      const inicio = await cache.match("/index.html");
      if (inicio) return inicio;
    }
    throw err;
  }
}

async function guardadoPrimeiro(req) {
  const cache = await caches.open(VERSAO);
  const guardado = await cache.match(req);
  if (guardado) return guardado;
  const resp = await fetch(req);
  if (resp && (resp.ok || resp.type === "opaque")) cache.put(req, resp.clone());
  return resp;
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    if (url.pathname.startsWith("/__/")) return;              // login do Firebase: sempre direto
    if (url.pathname.startsWith("/biblia/") || url.pathname.startsWith("/icons/")) {
      e.respondWith(guardadoPrimeiro(req));
      return;
    }
    e.respondWith(redePrimeiro(req));
    return;
  }
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(guardadoPrimeiro(req));
  }
});
