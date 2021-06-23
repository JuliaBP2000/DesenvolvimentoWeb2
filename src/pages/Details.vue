<template>
  <main>
       <Product 
            v-if="firebaseData" :obj="firebaseData"
        />
    </main>
</template>

<script>
import Product from '../components/Product.vue';
import { db } from '../firebase';

export default {
  name: 'Details',
  components: {
    Product,
  },

  data(){
    return {
      firebaseData: null,
      idProduto: '9'
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
