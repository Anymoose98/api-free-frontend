<script>
import axios from 'axios';

export default {
    name: 'appCreate',


    data() {
        return {
            resultIndex: [],
            dataLoaded: false,
            post: {
                title: '',
                slug: '',
                content: ''
            }
        };
    },

    mounted() {
    },
    methods: {
        createPost() {
            const apiPost = 'http://localhost:3000/posts'
            axios.post(apiPost, this.post)
                .then(response => {
                    console.log('Post creato con successo:', response.data);
                })
                .catch(error => {
                    console.error('Errore nella creazione del post:', error);

                });
        }
    }
};
</script>

<template>

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
