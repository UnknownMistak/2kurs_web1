<template>
  <main class="main" v-if="news.name">
    <h1 class="main__title">{{ news.name }} <span>({{ news.date }})</span></h1>
    <div class="main__date"></div>
    <p class="main__desc">{{ news.desc }}</p>
  </main>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  max-width: 90%;
  margin: 50px auto 0;
  &__title{
      margin-bottom: 30px;
      text-align: center;
      span{
          font-weight: 400;
          font-size: 16px;
      }
  }
}
</style>
