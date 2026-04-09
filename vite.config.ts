import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// figma:asset 가상 모듈 플러그인 (Vercel 빌드 환경 대응)
const figmaAssetPlugin = {
  name: 'figma-asset',
  resolveId(id: string) {
    if (id.startsWith('figma:asset/')) {
      return `\0figma-asset:${id}`
    }
  },
  load(id: string) {
    if (id.startsWith('\0figma-asset:figma:asset/')) {
      return 'export default ""'
    }
  },
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin,
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // "use client" 등 Next.js 전용 지시어 경고 무시
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return
        warn(warning)
      },
    },
  },
})
