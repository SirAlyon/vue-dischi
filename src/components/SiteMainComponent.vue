<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-2 d-flex" v-for="(disc, index) in discs" :key="index">
          <div class="disc mt-5 p-3">
            <img :src="disc.poster" :alt="disc.title"/>
            <div>{{disc.title}}</div>
            <div>{{disc.author}}</div>
            <div>{{disc.year}}</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "SiteMain",
  data(){
      return{
        link: 'https://flynn.boolean.careers/exercises/api/array/music',
        loading: true,
        discs: null

      }
  },
  mounted(){
      axios
      .get(this.link)
      .then(response => {
          console.log(response.data);
          this.discs = response.data.response
          console.log(this.discs);
      })
      .catch(error => {
          console.log(error);
      })
  }
};
</script>


<style scoped lang="scss">
main {
  height: calc(100vh - 100px);
  background-color: rgba(46, 58, 70, 1);
  color: white;
  .col-2{
    width: 20%;
    
  }
  .disc{
      background-color: rgba(30, 45, 59, 1);
      
  }
}
</style>