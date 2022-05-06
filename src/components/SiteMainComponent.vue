<template>
  <main>
    <div class="container">
      <div class="row" v-if="!loading">
        <Disc
          :disc="disc"
          v-for="(disc, index) in filteredDiscs"
          :key="index"
        />
      </div>
      <Loader v-else />
      <!-- <SelectDisc :discs="discs"/> -->
      <SelectDisc v-model="searchText" @selectSubmit="filterDiscs"/>
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
    SelectDisc,

  },
  data() {
    return {
      link: "https://flynn.boolean.careers/exercises/api/array/music",
      loading: true,
      discs: null,
      searchText: "",
      filteredDiscs: null
      
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
          this.filteredDiscs = this.discs
          console.log(this.discs);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    search() {
      console.log("Cercando per..." + this.searchText);
    },
     filterDiscs() {
      if (this.discs !== null) {
        this.filteredDiscs = this.discs.filter((disc) => {
          return disc.genre
            .toLowerCase()
            .includes(this.searchText.toLowerCase());
        });
      } else {
          return this.discs
      }
    },
  },
  computed: {
    /* filterDiscs() {
      if (this.discs !== null) {
        return this.discs.filter((disc) => {
          return disc.genre
            .toLowerCase()
            .includes(this.searchText.toLowerCase());
        });
      } else {
          return this.discs
      }
    }, */
  },
  mounted() {
    this.getApi();
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