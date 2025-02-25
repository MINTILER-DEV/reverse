const CACHE_NAME = 'reverse-proxy-cache-v1';
const TARGET_URL = 'https://www.youtube.com'; // Replace with the site you want to unblock

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(TARGET_URL + new URL(event.request.url).pathname)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error('Fetch failed:', error);
        return new Response('Proxy error', { status: 500 });
      })
  );
});