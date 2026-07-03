import build from '@hono/vite-build/cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'
import { copyFileSync, mkdirSync } from 'fs'
import { resolve } from 'path'

// Plugin to copy public/static/* into dist/static/* after build
const copyStaticPlugin = () => ({
  name: 'copy-static-assets',
  closeBundle() {
    try {
      mkdirSync(resolve(__dirname, 'dist/static'), { recursive: true })
      const files = ['logo.png', 'style.css']
      for (const f of files) {
        try {
          copyFileSync(
            resolve(__dirname, `public/static/${f}`),
            resolve(__dirname, `dist/static/${f}`)
          )
        } catch (_) {}
      }
    } catch (_) {}
  }
})

export default defineConfig({
  plugins: [
    build(),
    devServer({
      adapter,
      entry: 'src/index.tsx'
    }),
    copyStaticPlugin()
  ]
})
