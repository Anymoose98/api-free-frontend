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
  <header>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <!-- <h5><strong>I nostri contatti:</strong></h5>
        <ul>
          <li><strong>Email:</strong> ilblog@gmail.com</li>
          <li><strong>cell:</strong> +39 340869931</li>
        </ul> -->
        </div>
        <div class="col-4 text-center">
          <img src="/logo-blog.png" alt="Logo">
          <br>
        </div>
        <div class="col-4">

        </div>
      </div>
    </div>
  </header>

  <nav>
    <div class="container">
      <div class="row text-center">

        <div class="col-4">
          <h2>Categorie</h2>
        </div>

        <div class="col-4">
          <h2>Tutte le
            notizie</h2>
        </div>

        <div class="col-4">
          <h2>Tags</h2>
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
</style>
