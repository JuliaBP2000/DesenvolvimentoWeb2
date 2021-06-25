<template>
    <v-container class="telaToda">
        <v-row align="center" justify="center">
            <v-col cols="6">
                <v-card outlined shaped>
                    <v-card-title class="letraTexto">
                        Compra realizada com sucesso
                    </v-card-title>
                    <v-card-text class="letraTexto">
                        Parabens pela sua compra, em breve seus item serão entregues em seu endereço.
                    </v-card-text>
                    <v-card-actions class="letraTexto">
                        <v-btn plain @click="goBacktoHome()">Voltar para Página Inicial</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    methods:{
        goBacktoHome(){
            this.$router.push('/')
        }
    }
}
</script>

<style>
.telaToda{
    height: 100vh;
    align-content: space-between;
}
.letraTexto{
    font-family: 'Nunito', sans-serif;
    justify-content: center;
}
</style>