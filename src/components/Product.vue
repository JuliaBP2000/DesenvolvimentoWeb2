<template >
    <v-app id="app">
        <v-card width="100%" height="800px" id="card-container">
            <div class="images">
                <v-carousel  height="800px" hide-delimiters show-arrows-on-hover>
                    <template v-for="(image, i) in obj.images">
                        <v-carousel-item :key="i">
                            <img v-if="image" v-bind:src="require(`@/img/${image.split('/')[2]}`)"
                                width="100%"
                                height="100%"
                            />
                        </v-carousel-item>
                    </template>
                </v-carousel>
            </div>        
            <div class="info">
                <v-card-text id="card-text">
                    <h2 id="title">{{ obj.name }}</h2>
                    <p id="old-price">R${{obj.old_price.toFixed(2)}}</p>
                    <p id="new-price">R${{obj.new_price.toFixed(2)}}</p>
                    <p id="about">{{obj.about}}</p>
                    <ul id="categories">
                        <li v-for="(value, name) in obj.categories" :key="name">
                            <span id="subtitle">{{ name }}</span>: {{value}}
                        </li>
                    </ul>
                </v-card-text>
                <span id="subtitle">Tamanhos:</span>
                <div id="tamanhos" v-for="(value, name) in obj.sizes" :key="name">
                    <input name="size" type="radio" :id="value" :value="value" v-model="size" >
                    <label :for="value"> {{value}}</label>
                </div>
                <label for="qtd" id="subtitle">Quantidade: </label>
                <input id="qtd" type="number" min=1 value="1" v-model="qtd" >
                <br>
                <v-btn v-on:click="compraProduto">Comprar</v-btn>
            </div>
        </v-card>
    </v-app>
</template>
<style>    
    #card-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .info {
        padding: 20px;
    }
    .info #title {
        margin-bottom: 15px;
    }
    .info #old-price {
        color: red;
        text-decoration: line-through;
        display: inline-block;
    }
    .info #new-price {
        color: green;
        margin-left: 15px;
        display: inline-block;
    }
    .info #card-text p{
        font-size: 1.2rem;
        line-height: 1.6;
        margin-bottom: 10px;
    }
    #about {
        opacity: 0.85;
    }
    #categories {
        list-style-type: none;      
        font-size: 1.2rem;
        padding: 0;
        line-height: 1.6;
    }
    #subtitle {
        font-weight: bold;
        font-size: 1.2rem;
        text-transform: uppercase;
    }
    .info ul li span {
        color: black;
    }
    input[type=number] {
        width: 50px;
        background-color: white;
        border-radius: 5px;
        padding: 5px;
    }
    @media screen and (max-width: 1300px) {
        #card-container {
            grid-template-columns: 1fr;
        }
        #app {
            width: 75%;
            margin: 0 auto;
        }
    }
    @media screen and (max-width: 800px) {
        #app {
            width: 95%;
        }
    }
</style>
<script>

export default {
    props: {
        obj: {
            type: Object,
            required: true
        },
    },
    data: function() {
        return {
            carrinho: {},
            size: this.obj.sizes[0],
            qtd: 1,
        }
    },
    methods: {
         compraProduto(){
            this.carrinho = {id:this.obj.id, size:this.size, qtd:this.qtd};
            if (localStorage.getItem("carrinho") === null) {
                localStorage.setItem('carrinho', JSON.stringify([]));
            }
            let carrinho = localStorage.getItem('carrinho');
            let listaProdutos = JSON.parse(carrinho);
            listaProdutos.push(this.carrinho);
            localStorage.setItem('carrinho', JSON.stringify(listaProdutos));
            console.log(localStorage.getItem('carrinho'));
            this.$router.push('/carrinho');
        }
    }
}

</script>
