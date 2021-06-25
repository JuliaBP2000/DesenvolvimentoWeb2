<template>
  <v-app>
    <v-main>
      <HelloWorld :nome-mundo="mundo"/>

      <Product/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/carrosseul.vue';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyAmkNmm5uNQWD0weQykMhffodpQXQjBvMM',
  authDomain: 'desenvolvimentoweb2-2d224.firebaseapp.com',
  projectId: 'desenvolvimentoweb2-2d224'
});

export default {
  name: 'Homepage',
  
  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

