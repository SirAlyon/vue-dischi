<template>
    <header class="px-4">
        <img src="https://brandlogos.net/wp-content/uploads/2021/12/spotify-brandlogo.net_.png" alt="">
        <SelectDisc v-model="genre"  @selectSubmit="searchGenre" />
    </header>
    
</template>

<script>

import SelectDisc from "@/components/SelectDiscComponent.vue";
import state from "@/state.js"

export default{
    name: 'SiteHeader',
    components: {
        SelectDisc,
    }, 
    data(){
        return {
            genre: '',
            artist: ''
        }
    },
    methods:{
        searchGenre(){
            console.log('Searching for...');
            console.log(this.genre, state);
            state.searchText = this.genre
            console.log(state.searchText);
        },
    },
    computed:{
        
    }
}
</script>


<style scoped lang="scss">
    header{
        height: 100px;
        background-color: rgba(46, 58, 70, 1);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        
        img{
            height: 80px;
        }
    }
</style>


