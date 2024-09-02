<template>
    <div class="container" >
        <h3>Search videos</h3>
    </div>
</template>

<script>
    export default {
        name: 'InputVideoContainer',
        data() {
            return  {
                error: '',
                show: false,
            }
        }
    }
</script>

<style scoped>
    .error {
        background-color: black;
        color: red;
    }
</style>