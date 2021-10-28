import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteFonts from 'vite-plugin-fonts';
import { VitePWA } from 'vite-plugin-pwa';

const PWAconfig = {};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteFonts({
      google: {
        families: ['Source Sans Pro', 'Atkinson Hyperlegible'],
        display: 'swap',
        preconnect: true,
      },
    }),
    VitePWA(PWAconfig),
  ],
  server: {
    port: 8888,
    https: true,
  },
});
