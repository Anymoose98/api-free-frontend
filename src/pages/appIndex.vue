<script>
import appCardIndex from './card/appCardIndex.vue'
import axios from 'axios';

export default {
    name: 'Index',

    components:{
        appCardIndex,
    },


    data() {
        return {
            resultIndex: [],
            dataLoaded: false
        };
    },

    mounted() {
        // Chiamata API effettiva
        this.chiamata();
    },
    methods: {
        chiamata() {
            // Chiamata index funzione
            let apiIndex = "http://localhost:3000/posts";

            axios.get(apiIndex)
                .then((response) => {
                    this.resultIndex = response.data.data;
                    console.log(this.resultIndex);
                    this.dataLoaded = true;
                })
                .catch((error) => {
                    console.error('Qualcosa è andato storto', error);
                });
        }
    }
};
</script>

<template>
    <div v-if="dataLoaded">
        <main>
            <div class="container">
                <div class="row mt-5 mb-5 d-flex flex-wrap">
                    <appCardIndex v-for="post, index in this.resultIndex" :key="index" :post=post />
                </div>
            </div>
        </main>
    </div>

    <div v-else>
        Caricamento in corso
    </div>
</template>


<style scoped>

</style>
