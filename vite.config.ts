import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/dulow-customz/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
