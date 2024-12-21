/* global importScripts, workbox */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js",
);

if (workbox) {
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

  const CACHE_NAME = "CACHE";

  async function addAllToCache(requests) {
    const cache = await caches.open(CACHE_NAME);

    await cache.addAll(requests);
  }

  async function putToCache(request, response) {
    const cache = await caches.open(CACHE_NAME);

    await cache.put(request, response);
  }

  self.addEventListener("install", (event) => {
    console.log("Установлен");

    self.skipWaiting();

    event.waitUntil(
      addAllToCache(["./", "./main.css", "./main.js", "./index.html"]),
    );
  });

  self.addEventListener("activate", () => {
    console.log("Активирован");
  });

  self.addEventListener("fetch", (event) => {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseClone = response.clone();

          putToCache(event.request, responseClone);

          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        }),
    );
  });
}
