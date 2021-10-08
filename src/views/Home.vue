<template>
  <div>
    <v-header></v-header>
    <v-main-home></v-main-home>
  </div>
</template>

<script>
import vHeader from "../components/header/vHeader.vue";
import VMainHome from "../components/main/vMainHome.vue";
export default {
  components: {
    vHeader,
    VMainHome,
  },
};
</script>
