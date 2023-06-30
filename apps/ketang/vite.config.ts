import { defineApplicationConfig } from '@config/vite-config';

export default defineApplicationConfig({
  overrides: {
    server: {
      proxy: {
        '/basic-api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/basic-api/, ''),
        },
      },
    },
  },
});
