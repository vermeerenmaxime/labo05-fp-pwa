// main.ts
import { createApp, App as AppInterface } from 'vue';

import App from './App.vue';
import router from './bootstrap/router'; // Here, router is inside a folder bootstrap
import './assets/style/tailwind.css'; // Import the css-file.

import useFireBase from './composables/useFirebase';

(async () => {
  const app: AppInterface = createApp(App);

  const { restoreAuth } = useFireBase();

  await restoreAuth();
  app.use(router);

  app.mount('#app');
})();
