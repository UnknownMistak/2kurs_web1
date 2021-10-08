<template>
  <div class="card">
      <h1 class="card__title">{{obj.name}}</h1>
      <router-link class="card__link" :to="`/news/${obj.id}`">Подробнее-></router-link>
  </div>
</template>

<script>
export default {
    props:{
        obj:{
            type: Object,
            require: true
        }
    }
}
</script>

<style lang="scss" scoped>
.card{
    margin: 15px 0;
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__link{
        text-decoration: none;
        color: #000;
    }
}
</style>