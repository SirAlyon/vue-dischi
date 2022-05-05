<template>
  <div class="col-2 d-flex">
    <div class="disc mt-5 p-3">
      <img :src="disc.poster" :alt="disc.title" />
      <div class="title my-3">{{ disc.title }}</div>
      <div class="author">{{ disc.author }}</div>
      <div class="year mb-4">{{ disc.year }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscComponent",
  props: {
    disc: Object,
  },
};
</script>

<style scoped lang="scss">
.col-2 {
  width: 20%;
}
.disc {
  background-color: rgba(30, 45, 59, 1);
}
.title {
  font-size: 2rem;
  text-transform: uppercase;
  line-height: 30px;
  font-weight: bold;
}
.year,
.author {
  color: gray;
}


</style>