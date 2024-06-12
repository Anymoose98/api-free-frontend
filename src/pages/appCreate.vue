<script>
import axios from 'axios';

export default {
    name: 'appCreate',


    data() {
        return {
            resultTag: [],
            resultCategory: [],
            dataLoaded: false,
            sucess: false,
            post: {
                title: '',
                slug: '',
                image: '',
                content: '',
                categoryID: 'Scegli la categoria'
            }
        };
    },

    mounted() {
        this.tags();
        this.categories();
    },
    methods: {
        createPost() {
            const apiPost = 'http://localhost:3000/posts'
            axios.post(apiPost, this.post)
                .then(response => {
                    console.log('Post creato con successo:', response.data);
                    this.sucess = true

                })
                .catch(error => {
                    console.error('Errore nella creazione del post:', error);

                });
        },

        newPost() {
            this.sucess = false
            this.post = {
                title: '',
                slug: '',
                content: '',
                categoryID: ''
            }
        },

        tags() {
            // Chiamata tag funzione
            let apitags = "http://localhost:3000/tags";

            axios.get(apitags)
                .then((response) => {
                    this.resultTag = response.data;
                })
                .catch((error) => {
                    console.error('Qualcosa è andato storto', error);
                });
        },
        categories() {
            // Chiamata index funzione
            let apiCategories = "http://localhost:3000/categories";

            axios.get(apiCategories)
                .then((response) => {
                    this.resultCategory = response.data;
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
    <div v-if="sucess">
        <main class="m-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="viola my-5">Il post è stato salvato</h1>
                    </div>
                    <div class="col-12 text-center">
                        <button class="mx-3" @click="newPost">Clicca qui per creare un nuovo Post</button>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <div v-else>
        <main class="m-5">
            <div class="container">
                <div class="row text-center">
                    <div class="col-12">
                        <h1 class="viola">Crea il tuo post</h1>
                    </div>
                    <div class="col-12">
                        <form @submit.prevent="createPost">
                            <div class="mb-3">
                                <label for="title" class="form-label viola">Inserisci il titolo</label>
                                <input v-model="post.title" type="text" class="form-control" id="title"
                                    placeholder="Inserisci il titolo">
                            </div>
                            <div class="mb-3">
                                <label for="slug" class="form-label viola">Inserisci lo slug</label>
                                <input v-model="post.slug" type="text" class="form-control" id="slug"
                                    placeholder="Inserisci lo slug">
                            </div>
                            <div class="mb-3">
                                <label for="image" class="form-label viola">Inserisci l'immagine</label>
                                <input v-model="post.image" type="text" class="form-control" id="image"
                                    placeholder="Inserisci il link dell'immagine">
                            </div>
                            <div class="mb-3 d-flex">
                                <div class="col-6">
                                    <div class="me-2">
                                        <label for="tag" class="form-label viola">Inserisci il Tag</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Scegli il tag</option>
                                            <option v-for="tag in this.resultTag" :key="tag.id" value="tag.id">
                                                {{ tag.name }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="ms-2">
                                        <label for="categories" class="form-label viola">Inserisci la categoria</label>
                                        <select class="form-select"
                                            aria-label="Default select example">
                                            <option selected>Scegli la categoria </option>
                                            <option v-for="categorie in this.resultCategory" :key="categorie.id"
                                                value="categorie.id">{{ categorie.name }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="content" class="form-label viola">Scrivi qui il tuo contenuto</label>
                                <textarea v-model="post.content" class="form-control" id="econtent" rows="3"
                                    placeholder="Scrivi qui il tuo contenuto"></textarea>
                            </div>
                            <button type="submit" class="mx-3">Crea Post</button>
                        </form>

                    </div>
                </div>
            </div>
        </main>
    </div>
</template>


<style scoped>
.viola {
    color: #5E17EB;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

button {
    background-color: #5E17EB;
    color: white;
    padding: 5px;
    border: 0px;
    border-radius: 10px;
}
</style>
