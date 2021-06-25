<template>
<v-container>
    <Header />
    <v-row>
        <v-col cols="12">
            <v-list>
                <v-list-item v-for="(item, i) in buyList" :key="i">
                    <v-row justify="center" align="center" class="mt-2">
                        <v-col>
                            <v-card>
                                <v-card-title>
                                    <v-row>
                                        <v-col cols="4">    
                                            <v-img :src="item.images[0]"/>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-list-item-title :title="item.name"/>
                                        </v-col>
                                    </v-row>
                                </v-card-title>
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="4">
                                            <span :v-text="item.stock"/>
                                        </v-col>
                                        <v-col cols="4">
                                            <span :v-text="item.new_price"/>
                                        </v-col>
                                        <v-col cols="4">
                                            <span :v-text="item.size"/>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                                <v-card-actions>  
                                    <v-row justify="center" class="mb-0"> 
                                        <v-btn @click="removeProductFromCar(i)">Remove</v-btn>
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
        <v-btn @click="buyProducts()">Comprar</v-btn>
    </v-row>
</v-container>
</template>

<script>
//import { db } from '../firebase';
import Header from '../components/Header.vue';

export default {
    components:{
        Header
    },
    data(){
        return{
            buyList: [
                        {
                        id: "8",
                        name: "BOLSA NEW ERA SHOULDER BAG NEW YORK YANKEES CINZA/VERDE",
                        images: [
                            "./img/newera1.jpg",
                            "./img/newera2.jpg",
                            "./img/newera3.jpg",
                            "./img/newera4.jpg",
                            "./img/newera5.jpg"
                        ],
                        old_price: 149.99,
                        new_price: 104.99,
                        stock: 5,
                        about: "Shoulder Bag com padronagem militar, bolso frontal e logo neon do New York Yankees frontal.",
                        categories: {
                            cor: "Cinza/Verde",
                            material: "100% Poliéster",
                            bolsos: 3,
                            gênero: "Feminino",
                            marca: "New Era"
                        },
                        categoria: "Acessorio",
                        sizes: ["UNI"]
                        }                         
                    ],
            productsData: null
        }
    },
    firestore(){
       // this.productsData = db.collection('produtos').get()
    },
    created(){
        //let list = localStorage.getItem('carrinho')
        //let buyListTemp = JSON.parse(list)

        //for (let i = 0; i < buyListTemp.length; i++) {
        //    if(buyListTemp[i].id == this.productsData[i].id)
        //    this.buyList.push(this.productsData[i])
//        }
    },
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