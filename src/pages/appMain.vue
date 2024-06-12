<script>
import appCardMain from './card/appCardMain.vue'
import axios from 'axios';

export default {
    name: 'Main',

    components:{
        appCardMain,
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
        // filtra la data in modo da avere solo ciò che ci interessa
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
                        <p> {{ this.resultIndex[1].content }}</p>
                    
                    </div>


                    <div class="col-6">
                        <appCardMain v-for="post, index in this.resultIndex" :key="index" :post=post />
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
    margin-bottom: 30px;

}

.img-principale {
    width: 100%;

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
p{
    font-size: large;
}
</style>
