<template>
    <v-carousel>
        <v-carousel-item v-for="(image, index) in imageList" :key="index" :src="image" >
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