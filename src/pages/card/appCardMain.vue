<script>
export default {
    name: 'appCardMain',

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
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="post.image" class="img-fluid rounded-start" :alt="post.title">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title"><a href="">{{ TagliaTitolo(post.title) }}</a></h5>
                    <p class="card-text">{{ TagliaTesto(post.content) }}</p>
                    <p class="card-text"><small class="text-body-secondary"><strong>Pubblicato il: </strong> {{
                        soloData(post.updatedAt) }}</small></p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
strong {
    color: #5E17EB;
}

img{
    height: 100%;
    width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: #5E17EB;
}

</style>
