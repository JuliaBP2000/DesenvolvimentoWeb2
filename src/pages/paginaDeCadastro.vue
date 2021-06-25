<template>
    <v-container fluid class="background letraTexto">
        <v-row align="space-between" justify="center">
            <v-col cols="5" align-self="center">
                <v-card>
                    <v-card-title>
                        <v-row class="mt-3" justify="center">
                            <p>Cadastro</p>
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
                            <v-btn @click="cadastrar()" text>Cadastrar</v-btn>
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
        cadastrar(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.senha)
            .then((userCredential) => console.log(userCredential));

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
    justify-content: center;
}
</style>