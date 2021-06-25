<template>
  <main>
      <Header />
       <Product 
            v-if="firebaseData" :obj="firebaseData"
        />
        <Footer />
    </main>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Product from '../components/Product.vue';
import { db } from '../firebase';

export default {
  name: 'Details',
  components: {
    Product,
    Header,
    Footer
  },

  data(){
    return {
      firebaseData: null,
      idProduto: this.$route.params.id,
    }; 
  },

  firestore(){
    db.collection('produtos').where('id', '==', this.idProduto).get()
      .then(querySnapshot => querySnapshot.forEach(doc => {
        this.firebaseData = doc.data()
      }))
  },

  methods: {
  }
};

</script>

<style>

</style>
