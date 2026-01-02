const INSTANCES = [
  "https://nitter.poast.org",
  "https://nitter.fdn.fr",
  "https://nitter.privacydev.net"
];

const HASHTAG = "emptea";
const CORS = "https://api.allorigins.win/raw?url=";

const statusEl = document.getElementById("status");
const gallery = document.getElementById("gallery");

async function loadFromInstance(base) {
  const url = `${base}/search?f=tweets&q=%23${HASHTAG}`;
  const res = await fetch(CORS + encodeURIComponent(url));
  if (!res.ok) throw new Error("fetch failed");
  const html = await res.text();

  const doc = new DOMParser().parseFromString(html, "text/html");
  const imgs = [...doc.querySelectorAll("img[src*='/pic/']")];

  imgs.forEach(img => {
    const src = img.src.replace("small", "orig");
    addImage(src);
  });

  return imgs.length;
}

async function init() {
  for (const instance of INSTANCES) {
    try {
      statusEl.textContent = `trying ${instance}…`;
      const count = await loadFromInstance(instance);
      if (count > 0) {
        statusEl.textContent = `${count} images loaded`;
        return;
      }
    } catch (e) {
      console.warn(instance, e);
    }
  }
  statusEl.textContent = "failed to load images";
}

function addImage(src) {
  const img = document.createElement("img");
  img.loading = "lazy";
  img.src = src;
  gallery.appendChild(img);
}

init();
