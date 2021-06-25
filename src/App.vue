<template>
  <v-app>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/carrosseul.vue';

import firebase from 'firebase';

if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyAmkNmm5uNQWD0weQykMhffodpQXQjBvMM',
      authDomain: 'desenvolvimentoweb2-2d224.firebaseapp.com',
      projectId: 'desenvolvimentoweb2-2d224'
    });
}
export default {
  name: 'App',
  
  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
