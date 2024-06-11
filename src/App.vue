<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header/>
  <router-view></router-view>
  <Footer/>

</template>

<style lang="scss">
@use "./components/style/general.scss"

</style>
