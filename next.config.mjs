/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: produces a plain HTML/CSS/JS site in `out/` that can be
  // uploaded to any static webspace (e.g. Strato) — no Node.js server needed.
  output: "export",
  // Each route becomes a folder with index.html (e.g. /contact/index.html),
  // which plain Apache webspace serves cleanly at /contact/.
  trailingSlash: true,
  images: {
    // The static export has no image optimizer at runtime.
    unoptimized: true,
  },
};

export default nextConfig;
