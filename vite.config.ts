import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 6, // Alterar a porta para 3000 ou qualquer outra que preferir
  },
});
