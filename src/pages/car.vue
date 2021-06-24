<template>
<v-container>
    <v-list>
        <v-list-item v-for="(item, i) in buyList" :key="i">
            <v-img :src="item.images[0]"/>
            <v-list-item-title :title="item.name">
            <v-btn @click="removeProductFromCar(i)">Remove</v-btn>
            <span>item.stock</span>
            <span>item.new_price</span>
            <span>item.size</span>
        </v-list-item>
    </v-list>

    <v-btn @click="buyProducts()">Comprar</v-btn>
</v-container>
</template>

<script>
import database from 'database.json'
export default {
    data(){
        return{
            buyList : []
        }
    },
    created(){
        this.buyList = JSON.parse(database)
    },
    methods:{
        //passa o id do prduto que sera removido do carrinho
        removeProductFromCar(id){
            buyList.splice(id,1)
            localStorage.setItem('carrinho', JSON.stringify(buyList));
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

            window.location.href = "/comprar"
        }
    }
}
</script>