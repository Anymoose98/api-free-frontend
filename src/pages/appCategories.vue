<script>
import axios from 'axios';

export default {
    name: 'appCategories',


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
            let apiCategories = "http://localhost:3000/categories";

            axios.get(apiCategories)
                .then((response) => {
                    this.resultIndex = response.data;
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
        <main class="m-5">
            <div class="container">
                <div class="row text-center">
                    <h1 class="viola">Le nostre categorie</h1>
                    <ul>
                        <li v-for="(item, index) in resultIndex" :key="index">
                            <h1>{{ item.name }}</h1>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>

    <div v-else>
        Caricamento in corso
    </div>
</template>


<style scoped>

.viola{
    color: #5E17EB;
}
ul {
  list-style: none; 
  padding: 0; 
  margin: 0; 
}
</style>
