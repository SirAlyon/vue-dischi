<template>
  <!-- <select name="selectDisc">
        <option v-for="(disc, index) in discs" :key="index" :value="disc.genre">{{disc.genre}}</option>
    </select> -->

  <select class="mt-5" name="selectArtist" 
  v-on:input="$emit('input', $event.target.value)"
  @change="$emit('selectArtist')">
    <option value="">Nessun Filtro</option>
    <option value="rock">Rock</option>
    <option value="pop">Pop</option>
    <option value="jazz">Jazz</option>
    <option value="metal">Metal</option>
  </select>
</template>

<script>
export default {
  name: "SelectDisc",
  props: {
      genre: String,
      
  },
  methods: {
      getValue(){
          console.log();
      }
  }
  
};
</script>

<style scoped lang="scss">
</style>