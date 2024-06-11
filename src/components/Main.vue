<script>
import axios from 'axios';

export default {
    name: 'Main',
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
        soloData(dato) {
            return dato.substring(0, 10);
        },

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
                <div class="row">
                    <div class="col-6">
                        <img :src="this.resultIndex[1].image" class="img-principale" alt="">
                        <p><strong>Pubblicato il: </strong> {{ soloData(resultIndex[1].createdAt) }}</p>
                        <a href="">
                            <h4> {{ this.resultIndex[1].title }}</h4>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <div v-else>
        Caricamento in corso
    </div>
</template>


<style scoped>
main {
    margin-top: 30px;
}

.img-principale {
    height: 500px;
}

strong {
    color: #5E17EB;
}

a {
    text-decoration: none;
    color: inherit;

    :hover {
        color: #5E17EB;
        font-weight: 600;
    }
}
</style>
