<template>
    <div>
        <slot name="title"></slot>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    span {
        display: flex;
        flex-direction: row;
    }

    span:before {
        content: "";
        flex: 1 1;
        border-bottom: solid 1px #d4d4d4;
        margin: auto 25px auto 5px;
    }

    span:after {
        content: "";
        flex: 1 1;
        border-bottom: solid 1px #d4d4d4;
        margin: auto 5px auto 25px;
    }
</style>
