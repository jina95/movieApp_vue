<template>
  <header>
    <router-link to="/" class="logo">MOVIE</router-link>
    <FavoriteItems></FavoriteItems>
  </header>
</template>

<script>
import FavoriteItems from '@/components/header/FavoriteItems.vue';
export default {
  components: { FavoriteItems },
};
</script>

<style></style>
