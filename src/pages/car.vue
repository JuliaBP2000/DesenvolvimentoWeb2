<template>
<v-container fluid class="letraTexto">
    <Header />
    <v-row justify="center">
        <v-col cols="10">
            <v-list>
                <v-list-item v-for="(item, i) in buyList" :key="i">
                    <v-row justify="center" align="center" class="mt-2">
                        <v-col>
                            <v-card>
                                <v-card-title>
                                    <v-row>
                                        <v-col cols="4">    
                                            <v-img v-bind:src="require(`@/img/${item.images[0].split('/')[2]}`)" height="100" width="100"/>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-row dense>
                                                <v-list-item-title><h3>{{item.name}}</h3></v-list-item-title>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-card-title>
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="4">
                                            <h3>Quantidade</h3>
                                            <p> {{item.qtd}}</p>
                                        </v-col>
                                        <v-col cols="4">
                                            <h3>Preço</h3>
                                            <p>{{item.price}}</p>
                                        </v-col>
                                        <v-col cols="4">
                                            <h3>Tamanho</h3>
                                            <p>{{item.size}}</p>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                                <v-card-actions>  
                                    <v-row justify="center" class="mb-0"> 
                                        <v-col cols="3">
                                            <v-btn @click="removeProductFromCar(i)">Remove</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-list-item>
            </v-list>

        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col cols="3">
            <v-btn @click="buyProducts()">Comprar</v-btn>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import { db } from '../firebase';
import Header from '../components/Header.vue';

export default {
    components:{
        Header
    },
    data(){
        return{
            buyList: JSON.parse(localStorage.getItem('carrinho')),
            productsData: []
        }
    },
    firestore(){
       db.collection('produtos').get()
        .then(querySnapshot => querySnapshot.forEach(doc => {
        this.productsData.push(doc.data());  
      }))
      console.log(this.buyList)
    },

    //created(){
    //    let list = localStorage.getItem('carrinho')
    //    let buyListTemp = JSON.parse(list)
    //    for (let i = 0; i < buyListTemp.length; i++) {
    //        for (let index = 0; index < this.productsData.length; index++) {
    //            if(buyListTemp[i].id == this.productsData[index].id)
    //                this.buyList.push(this.productsData[index])
    //        }
    //    }
    //},
    
    methods:{
        //passa o id do prduto que sera removido do carrinho
        removeProductFromCar(id){
            this.buyList.splice(id,1)
            localStorage.setItem('carrinho', JSON.stringify(this.buyList));
        },
        //Manda pra pagina de compra final
        buyProducts(){
            //TODO: Fazer a função de pagamento de produto
            //console.log(products)
            //let valorTotal = 0
            //let id = []
            //for (let index = 0; index < products.length; index++) {
            //        valorTotal += products[i][3]
            //        id.push(products[i][0])
            //}

            //for (let index = 0; index < allproducts.length; index++) {
            //    if(id === allproducts[i].id)        
            //        allproducts[i].stock -= products[i][1]
            //}
            this.$router.push('/buyPage');
        }
    }
}
</script>

<style>
.letraTexto{
    font-family: 'Nunito', sans-serif;
}
</style>