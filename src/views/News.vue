<template>
  <div>
    <v-header></v-header>
    <v-main-news></v-main-news>
  </div>
</template>

<script>
import vHeader from "../components/header/vHeader.vue";
import VMainNews from '../components/main/vMainNews.vue';

export default {
  components: {
    vHeader,
    VMainNews,
  },
};
</script>

<style></style>
