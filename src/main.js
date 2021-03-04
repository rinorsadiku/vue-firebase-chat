import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire';
import VueRouter from 'vue-router';
import VueCompositionApi from '@vue/composition-api';

import Home from './components/Home.vue';
import ChatRoom from './components/ChatRoom.vue';

Vue.use(VueCompositionApi)
Vue.use(VueRouter);
Vue.use(firestorePlugin);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      name: 'chat',
      path: "/chats/:id",
      component: ChatRoom
    }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
