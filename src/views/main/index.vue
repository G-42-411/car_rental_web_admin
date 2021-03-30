<template>
    <div class="container">
        <div class="top-bar">
            <topbar></topbar>
        </div>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import topbar from '../../components/topbar'
    export default {
        name: "index",
        components:{
            topbar
        }
    }
</script>

<style scoped>
.container{
    height: 100vh;
}
</style>
