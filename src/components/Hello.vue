<template>
    <div class="container">
        <div class="greetings"> 
            <h1>Discover the cosmos!</h1>
            <p>{{ message }}</p>
        </div>
        <!-- <InputsContainer /> -->
        <!--Дочірній InputsContainer будe рендеретись у вкладений router-view-->
        <router-view />
    </div>
</template>

<script>
import InputsContainer from '@/components/searchmethods/InputsContainer.vue';

export default {
    name: 'Hello',
    components: {
        InputsContainer, 
    },
    data() {
        return  {
            message: "Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.",
        }
    }
}
</script>

<style scoped>
    .greetings {
        display:flex;
        flex-direction: column;
        justify-content: center;
        text-align: center; 
    }
</style>
