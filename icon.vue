<template>
    <svg class="wheels-icon">
        <use :xlink:href="`#i-${name||icon}`"></use>
    </svg>
</template>
<script>
    export default {
        name:'wheel-icon',
        props:{
            name:{},
            icon:{}
        }
    }
</script>
<style lang="scss">
    .wheels-icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        overflow: hidden;
    }
</style>