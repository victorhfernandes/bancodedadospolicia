import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.100",
    port: 6,
  },
});

//127.0.0.100 pcmbr.jusls.org.br
