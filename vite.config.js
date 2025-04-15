import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/Dastresi-shop/", // مهم: مسیر رپوزیتوری

    server: {
        proxy: {
            "/api": {
                target: "https://your-api.com",
                changeOrigin: true,
                secure: false,
            },
        },
    },
});