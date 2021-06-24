<template>
    <v-carousel>
        <v-carousel-item v-for="(image, index) in imageList" :key="index" v-bind:src="require(`@/img/${image.split('/')[2]}`)" >
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    data(){
        return {
            imageList : ['../img/1.jpg','../img/2.jpg','../img/3.jpg']
        }
    }
}
</script>