import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";

export default defineConfig({
  plugins: [
    ViteEjsPlugin({
      title: "Ranking",
    }),
  ],
  root: "./src",
  publicDir: "./public", 
  server: {
    port: 5173,
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
  },
});
