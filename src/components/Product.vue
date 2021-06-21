<template>
    <v-card max-width="374">
         <v-card-title>{{title}}</v-card-title>
        <v-img
            height="250"
            src="img"
        ></v-img>
        <v-card-text>
            <div class="my-4 text-subtitle-1">
                ${{obj.new_price}}
            </div>
            <div>{{obj.about}}</div>

        </v-card-text>
    </v-card>
</template>

<script>

export default {
    props: ['title', 'img', 'price', 'details', 'obj']
}

</script>
