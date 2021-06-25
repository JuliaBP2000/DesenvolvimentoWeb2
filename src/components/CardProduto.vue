<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      v-bind:src="require(`@/img/${produto.images[0].split('/')[2]}`)"
    > </v-img>

    <v-card-title>{{produto.name}}</v-card-title>

    <v-card-text>

      <div class="my-4 text-subtitle-1">
        R$ • {{produto.new_price}}
      </div>

    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="comprar(produto.id)"
      >
        Comprar
      </v-btn>

    </v-card-actions>

  </v-card>
</template>

<script>
import { db } from '../firebase';

export default {
  name: 'CardProduto',
  components: {
  },

    props:{
        produto: {type:Object,required:true},
    },

  data(){
    return {
      firebaseData: null,
    }; 
  },
  
  firestore(){
    db.collection('produtos').get()
      .then(querySnapshot => querySnapshot.forEach(doc => {
        this.firebaseData = doc.data()
      }))
  },

  methods: {
       comprar(id){
           this.$router.push(`/produto/${id}`);
       }
  }
};

</script>