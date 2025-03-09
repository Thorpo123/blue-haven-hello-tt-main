import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/blue-haven-hello-tt/", // Update base URL to match repository name
  build: {
    outDir: "dist",
    sourcemap: true,
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    host: "::",
    port: 8080,
    // Explicitly configure headers for JavaScript files
    headers: {
      '*.js': {
        'Content-Type': 'application/javascript',
      },
      '*.jsx': {
        'Content-Type': 'application/javascript',
      },
      '*.ts': {
        'Content-Type': 'application/javascript',
      },
      '*.tsx': {
        'Content-Type': 'application/javascript',
      },
    },
    fs: {
      strict: false,
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
