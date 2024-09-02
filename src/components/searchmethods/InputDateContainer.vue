<template>
    <div class="container" >
        <h3>Search by date</h3>
    </div>
</template>

<script>
    export default {
        name: 'InputDateContainer',
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