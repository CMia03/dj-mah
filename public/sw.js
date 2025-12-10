// Simple no-op service worker to avoid 404s when /sw.js is requested.
// Extend with offline caching or push handling as needed.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

