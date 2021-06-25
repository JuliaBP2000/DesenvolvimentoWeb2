<template>
    <v-container fluid class="letraTexto">
        <v-row align="center" justify="center">
            <v-col cols="5">
                <v-card>
                    <v-card-title>
                        <v-row class="mt-3" justify="center">
                            <p>Login</p>
                        </v-row>
                    </v-card-title>
                    <v-row justify="center">
                        <v-col cols="9">
                        <v-text-field
                        v-model="email"
                        label="Email"
                        required />
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="9">
                        <v-text-field
                        v-model="senha"
                        label="Password"
                        required />
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="3">
                            <v-btn @click="login()" text>Entrar</v-btn>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="3">
                            <v-btn @click="areaDeCadastro()" small text>Cadastro</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import firebase from 'firebase'

export default {
    data(){
        return {
            email: '',
            senha: ''
        }
    },
    methods:{
        areaDeCadastro(){
            this.$router.push('/cadastro')
        },
        login(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.senha)
             .then((userCredential) => console.log(userCredential));
               firebase.auth().onAuthStateChanged(function(user) {
                    if (user) {
                         // User is signed in.
                    } else {
                        // No user is signed in.
                    }
                });

            localStorage.setItem('isLogged', true)
            this.$router.push('/')
        }
    }
}
</script>


<style>
.background{
    background-color: darkgrey;
    height: 100vh;
    align-content: space-between;
}
.letraTexto{
    font-family: 'Nunito', sans-serif;
}
</style>