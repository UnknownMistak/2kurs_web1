<template>
  <main class="main">
    <div class="main__wrapper">
      <!-- с помощью v-for проходим по массиву news и передаем заначение item в пропс компонета vNewsCard  -->
      <v-news-card
        v-for="item in news"
        :key="item.id"
        :obj="item"
      ></v-news-card>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import vNewsCard from "./News/vNewsCard.vue";
export default {
  components: { vNewsCard },
  data() {
    return {
      news: [],
    };
  },
  async mounted() {
    //   Получаем данные из файла articles и записываем их в news
    this.news = await axios
      .get("/articles.json")
      .then((res) => res.data);
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding-top: 50px;
  &__wrapper {
    max-width: 800px;
    margin: 0 auto;
  }
}
</style>
