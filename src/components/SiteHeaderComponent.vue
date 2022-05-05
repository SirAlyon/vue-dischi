<template>
    <header class="px-4">
        <img src="https://brandlogos.net/wp-content/uploads/2021/12/spotify-brandlogo.net_.png" alt="">
    </header>
</template>

<script>

export default{
    name: 'SiteHeader',
}
</script>


<style scoped lang="scss">
    header{
        height: 100px;
        background-color: rgba(30, 45, 59, 1);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        
        img{
            height: 80px;
        }
    }
</style>


