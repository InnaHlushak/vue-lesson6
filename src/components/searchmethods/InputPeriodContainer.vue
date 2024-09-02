<template>
    <div class="container" >
        <h3>Search by time period</h3>
    </div>
</template>

<script>
    export default {
        name: 'InputPeriodContainer',
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