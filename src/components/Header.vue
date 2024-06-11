<script>
export default {
  name: 'Header',
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<template>
  <!-- Logo -->
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <router-link :to="{ name: 'main' }">
            <img src="/logo-blog.png" alt="Logo">
          </router-link>
          <br>
        </div>
      </div>
    </div>
  </header>

  <!-- Barra nav -->
  <nav>
    <div class="container">
      <div class="row text-center">

        <div class="col-4">
          <h2><router-link :to="{ name: 'categories' }">Categorie</router-link></h2>
        </div>

        <div class="col-4">
          <h2><router-link :to="{ name: 'index' }">Tutte le
              notizie</router-link></h2>
        </div>

        <div class="col-4">
          <h2><router-link :to="{ name: 'tags' }">Tags</router-link></h2>
        </div>
      </div>
    </div>

  </nav>
</template>


<style scoped>
header {
  padding-top: 5px;
  padding-bottom: 5px;
}

nav {
  background-color: #5E17EB;
  padding: 5px;
}

h2 {
  color: white;
  cursor: pointer;
}
h2:hover{
  transform: scale(1.2);
}

a{
  color:white;
  text-decoration: none;
}

</style>
