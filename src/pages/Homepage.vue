<template>
  <v-app>
    <v-main>
      <Header />
      <v-row justify="center">
        <v-col xs="8" xl="8" md="10">
          <v-row dense justify="center">
            <v-col xs="4" xl="4" md="5" v-for="(item, i) in firebaseData" :key="i"> 
              <Product :produto="item"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import {db} from '../firebase';
import Product from '../components/CardProduto.vue';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Homepage',
  
  components: {
    Product,
    Header,
    Footer
  },

data(){
    return {
      firebaseData: [],
    }; 
  },
  
  firestore(){
    db.collection('produtos').get()
      .then(querySnapshot => querySnapshot.forEach(doc => {
        this.firebaseData.push(doc.data());  
      }))
  },
};

</script>

