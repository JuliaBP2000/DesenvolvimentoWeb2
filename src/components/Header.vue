<template>
    <header>
        <nav class="nav-bar">             
            <div class="nav-container">   
                    <ul class="nav-list">
                    <li><a href="/">Home</a></li>
                    </ul>
                <ul class="nav-list" >
                    <li><a href="/masculino">Masculino</a></li>
                    <li><a href="/feminino">Feminino</a></li>
                    <li><a href="/acessorios">Acessórios</a></li>
                </ul>
                <ul class="nav-list">
                    <li v-if="isLogged"><v-btn text @click="signout()">Logout</v-btn></li>
                    <li v-else><a href="/login">Login</a></li>
                    <li> <a href="/carrinho"><img href="#" class="shopcar" src="../img/shopping-cart.png" title="Carrinho de compras"/></a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    created(){
        localStorage.setItem('isLogged', false);
    },

    data(){
    return {
      isLogged: localStorage.getItem('isLogged') === 'true',
    }; 
  },
  methods: {
      signout(){
        localStorage.setItem('isLogged', false)
        this.isLogged = false;
      }
  }
}

</script>

<style>

.nav-container {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 55px;
    background-color: #007bff;
    color: black;
}
    
nav.nav-bar ul {
    list-style: none;  
}
  
.nav-list {
    display: flex;
    align-items: center;
}
  
.nav-list li {
    padding: 3px;
    margin:4px;
}

.nav-list img{
    width: 35px;
    height: 35px;   
}
  
.nav-list li a {
    color: #f9f9f9;
    text-shadow: 1px 1px 3px rgba(150, 150, 150, 1);
    padding: 10px 10px;
    font-size: 1.5em;
    text-align: center;
    text-decoration: none;
}

.nav-list li a:hover{
    filter: brightness(0.8);
}
</style>