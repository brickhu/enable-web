import { createApp } from 'vue';
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import index from './index.vue';

// const routes = [
//   { path: '/', component: index },
//   { path: '/about', component: index },
// ];

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

console.log(router);

const app = createApp(index);
app.mount('#app');
