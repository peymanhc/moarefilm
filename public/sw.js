let cacheData = "appV1";
const dynamicCacheName = "site-dynamic-v3";
const assets = [
  "/static/js/main.chunk.js",
  "/static/media/img19.b49a2086.jpg",
  "/static/media/banner.b314b37c.jpg",
  "/static/js/bundle.js",
  "/static/js/0.chunk.js",
  "./index.html",
  "/main.a2df2d858a4bf76a28c1.hot-update.js",
  "/",
];
// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};
// install event
self.addEventListener("install", (event) => {
  console.log("service worker installed");
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener("activate", (evt) => {
  console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then((keys) => {
      //console.log(keys);
      return Promise.all(
        keys
          .filter((key) => key !== cacheData && key !== dynamicCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

// fetch
self.addEventListener("fetch", (event) => {
  if (navigator.onLine) {
    event.respondWith(
      caches
        .match(event.request)
        .then(function (response) {
          return response || fetch(event.request);
        })
        .catch(() => {
          if (event.request.url.indexOf(".html") > -1) {
            return caches.match("./index.html");
          }
        })
    );
  } else {
    if (event.request.url === "https://localhost:3000/static/js/main.chunk.js") {
      event.waitUntil(
        registration.showNotification("Internet", {
          body: "Internet Not Working",
        })
      );
    }
  }
});
