<template>
<div>
    <cap-head></cap-head>
    <router-view/>
    <cap-footer></cap-footer>
</div>
</template>

<script>
    import CapHead from '@/components/CapHead'
    import CapFooter from '@/components/CapFooter'
    export default {
        name: "LayOut",
        components:{
            CapHead,
            CapFooter
        }
    }
</script>

<style scoped>

</style>
