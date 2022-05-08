import vue from 'vue'

const state = vue.observable({
    searchText: '',
    artists: [],
    genre: [],
})

export default state