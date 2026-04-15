import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { cloudflare } from "@cloudflare/vite-plugin";

// Cache outside Dropbox to avoid file-locking races between Dropbox sync
// and Vite's dependency optimizer (otherwise EBUSY on Windows).
export default defineConfig({
  plugins: [react(), tailwindcss(), cloudflare()],
  cacheDir: join(tmpdir(), "vite-personal-web"),
});