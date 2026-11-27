// Ler Bíblia — service worker dos avisos (Firebase Cloud Messaging)
// O Firebase procura este arquivo neste nome e nesta pasta; ele roda sozinho,
// separado do sw.js (que cuida do app funcionar sem internet).
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyABCSNnIVGRqx6nrQw1N3Bz9Iox8ufJd0Y",
  authDomain: "ler-biblia.firebaseapp.com",
  projectId: "ler-biblia",
  storageBucket: "ler-biblia.firebasestorage.app",
  messagingSenderId: "108213408345",
  appId: "1:108213408345:web:95df272f91b5d218add748"
});

// O aviso enviado já vem pronto (título e texto), então o navegador mostra sozinho.
// Isto aqui só garante o ícone e o que acontece ao tocar no aviso.
firebase.messaging().onBackgroundMessage((payload) => {
  const d = payload?.notification || payload?.data || {};
  self.registration.showNotification(d.title || "Ler Bíblia", {
    body: d.body || "Sua leitura de hoje está esperando.",
    icon: "/icons/icon-192.png",
    badge: "/icons/icon-192.png",
    tag: "lembrete-diario",
    data: { url: "/" }
  });
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil((async () => {
    const abertas = await clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const c of abertas) if (c.url.includes(self.location.origin)) return c.focus();
    return clients.openWindow("/");
  })());
});
