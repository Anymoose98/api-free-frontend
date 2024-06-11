<script>
export default {
    name: 'Footer',
    data() {
        return {
        };
    },
    methods: {
    }
};
</script>

<template>
    <footer>
        <div class="container">
            <div class="row text-center">
                <div class="col-4">
                    <h2><strong>I nostri contatti</strong></h2>
                    <ul>
                        <li><strong>Email:</strong> ilblog@gmail.com</li>
                        <li><strong>cell:</strong> +39 340869931</li>
                    </ul>
                </div>
                <div class="col-4">
                    <h2><strong>Seguici su</strong></h2>
                    <ul class="text-center">
                        <li><i class="fa-brands fa-youtube"></i> YouTube</li>
                        <li><i class="fa-brands fa-facebook"></i> Facebook</li>
                        <li><i class="fa-brands fa-instagram"></i> Instagram</li>
                    </ul>
                </div>
                <div class="col-4">
                    <h2><strong>Collabora con noi</strong></h2>
                    <h5>Manda il tuo curriculum a</h5>
                    <h5><strong>iltuocv@ilblog.it</strong></h5>
                </div>
            </div>
        </div>


    </footer>

</template>


<style scoped>
footer {
    background-color: #5E17EB;
    padding: 20px ;
    color: white;
}
ul {
  list-style: none; 
  padding: 0; 
  margin: 0; 
}
</style>
