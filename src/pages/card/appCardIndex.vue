<script>
export default {
    name: 'appCardIndex',

    props: {
        post: Object
    },
    data() {
        return {
        };
    },
    methods: {
        // filtra la data in modo da avere solo ciò che ci interessa
        soloData(dato) {
            return dato.substring(0, 10);
        },

        // Taglia il testo 
        TagliaTesto(text) {
            const maxLength = 40;
            if (text.length > maxLength) {
                return text.substring(0, maxLength) + '...';
            } else {
                return text;
            }
        },
        // Taglia titolo
        TagliaTitolo(text) {
            const maxLength = 35;
            if (text.length > maxLength) {
                return text.substring(0, maxLength) + '...';
            } else {
                return text;
            }
        }
    }
};
</script>

<template>
    <div class="col-4 my-3">
        <div class="card" >
            <img :src="post.image" class="card-img-top" :alt="post.title">
            <div class="card-body">
                <h5 class="card-title">{{ TagliaTitolo(post.title) }}</h5>
                <p class="card-text">{{ TagliaTesto(post.content) }}</p>
                <div class="text-center">
                    <a href="#" class="bottone px-2">Scopri di più</a>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
strong {
    color: #5E17EB;
}

img {
    height: 200px;
    width: 100%;
    object-fit: cover; 
}

a {
    text-decoration: none;
    color: inherit;
}

a:hover {
    color: #5E17EB;
}

h5{
    color: #5E17EB; 
}

.bottone{
    background-color: #5E17EB;
    padding: 5px;
    color: white;
    border-radius: 5px;
}
.bottone:hover{
    color: #5E17EB;
    background-color: white;
    border: solid 2px #5E17EB
}
</style>
