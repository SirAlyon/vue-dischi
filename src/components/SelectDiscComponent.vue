<template>
  <!-- <select name="selectDisc">
        <option v-for="(disc, index) in discs" :key="index" :value="disc.genre">{{disc.genre}}</option>
    </select> -->

  <select name="selectGenre" :value="selected" @change="$emit('selectSubmit', $event)">
    <option value="0">Nessun Filtro</option>
    <option value="rock">Rock</option>
    <option value="pop">Pop</option>
    <option value="jazz">Jazz</option>
    <option value="metal">Metal</option>
  </select>
</template>

<script>
export default {
  name: "SelectDisc",
  data(){
      return {
          selected: '',
      }
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