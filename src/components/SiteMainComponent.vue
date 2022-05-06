<template>
  <main>
    <div class="container">
      <div class="row" v-if="!loading">
        <Disc :disc="disc" v-for="(disc, index) in discs" :key="index" />
      </div>
      <Loader v-else />
      <!-- <SelectDisc :discs="discs"/> -->
      <SelectDisc @selectSubmit="search($event)"/>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import Loader from "@/components/LoaderComponent.vue";
import Disc from "@/components/DiscComponent.vue";
import SelectDisc from "@/components/SelectDiscComponent.vue";


export default {
  name: "SiteMain",
  components: {
    Loader,
    Disc,
    SelectDisc
  },
  data() {
    return {
      link: "https://flynn.boolean.careers/exercises/api/array/music",
      loading: true,
      discs: null,
    };
  },
  methods: {
    getApi() {
      axios
        .get(this.link)
        .then((response) => {
          console.log(response.data);
          this.discs = response.data.response;
          this.loading = false;
          console.log(this.discs);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    search(){
        console.log('Cercando per...' + $event.target.value);
    }
  },
  mounted() {
      this.getApi()
  },
};
</script>


<style scoped lang="scss">
main {
  height: calc(100vh - 100px);
  background-color: rgba(30, 45, 59, 1);
  color: white;
  overflow: hidden;
  .container {
    height: 100%;
  }
}
</style>