// router.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from './components/loginsayfasi.html'; // Giriş sayfasının Vue bileşeni
import Dashboard from './components/Dashboard.html'; // Dashboard sayfasının Vue bileşeni

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/login' }, // Anasayfada /login yoluna yönlendirme
  { path: '/login', component: LoginPage }, // /login yoluna LoginPage bileşenini eşleştirme
  { path: '/dashboard', component: Dashboard }, // /dashboard yoluna Dashboard bileşenini eşleştirme
];

const router = new VueRouter({
  routes,
  mode: 'history' // İsteğe bağlı olarak history modunu kullanabilirsiniz
});

export default router;
