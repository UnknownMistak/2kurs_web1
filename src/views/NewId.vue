<template>
  <div>
    <v-header></v-header>
    <v-main-new :news="news"></v-main-new>
  </div>
</template>

<script>
import axios from 'axios';
import vHeader from "../components/header/vHeader.vue";
import VMainNew from '../components/main/vMainNew.vue';
export default {
  data() {
    return {
      news: {},
    };
  },
  async mounted() {
     this.news = await axios.get("/articles.json").then(res => res.data.find(item => item.id == this.$route.params.id))
  },
  components: {
    vHeader,
    VMainNew,
  },
};
</script>
