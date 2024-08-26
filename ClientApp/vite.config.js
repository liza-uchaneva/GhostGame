import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'
import { resolve } from 'path'

export default defineConfig({
    base:'https://liza-uchaneva.github.io/ghost-game',
    plugins: [vue(), mkcert()],
    server: {
        https: true,
        port: 3399,
        strictPort: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, '/api')
            }
        }
    },
    resolve: {
        alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
    }
})
