<template>
  <v-app>
    <v-main>
      <v-row justify="center">
      <v-col cols="8">
         <v-row dense justify="center">
           <v-col cols="4" v-for="(index, i) in 10" :key="i"> 
      <HelloWorld/>
       </v-col>
    </v-row>
      </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/CardProduto.vue';

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
