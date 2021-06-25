<template>
    <v-container>
       <header>
            <nav class="nav-bar">             
                <div class="nav-container">   
                    <ul class="nav-list " id="nav">
                        <li> <a href="/masculino" id="title1"> Masculino</a></li>
                        <li> <a href="/feminino" id="title2"> Feminino</a></li>
                        <li> <a href="/acessorios" id="title3"> Acessórios</a></li>
                        <li v-if="isLogged===false"> <a href="/login" id="title4"> Login </a></li>
                        <li v-else> <a @click="Signout"> Logout </a></li>
                        <li> <a href="/carrinho" id="title5"> <img href="#" class="shopcar" src="../img/shopping-cart.png" title="Carrinho de compras"/> </a></li>
                    </ul>
                </div>
            </nav>
        </header>   
    </v-container>
</template>

<script>
export default {
    created(){
        localStorage.setItem('isLogged', false);
    },

    data(){
    return {
      isLogged: localStorage.getItem('isLogged'),
    }; 
  },
}

</script>

<style>
/*Cabelhaço*/

.nav-container {
    background: url(../img/background.png); 
    overflow: hidden;
    display: flex;
}
  
.nav-menu {
    display: none;
}
    
nav.nav-bar ul {
    list-style: none;  
}
  
.nav-list {
    display: flex;
    flex-grow: 1;
}
  
.nav-list li {
    float: left;
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
  
.nav-list li:nth-of-type(1){
    margin-left: auto;
}

.nav-list li:nth-of-type(4){
    margin-left: auto;
}

.nav-list li a:hover{
    -webkit-filter: brightness(1.3);
    padding-top: 15px ;
}
  
#title1, #title2, #title3, #title4 {
    background: url(../img/background.png);
}
</style>