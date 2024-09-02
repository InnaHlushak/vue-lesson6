<template>
    <div class="wrapper">
        <v-container>
            <v-row justify="space-around">
                <v-col>
                    <v-tabs
                    align-tabs="center"
                    color="indigo"
                    >
                        <router-link to="/">
                            <v-tab :value="1">Home</v-tab>
                        </router-link>
                        <router-link to="/random">
                            <v-tab :value="2">Random</v-tab>
                        </router-link>
                        <router-link :to="{name: 'by-date'}">
                            <v-tab :value="3">By date </v-tab>
                        </router-link>
                        <router-link :to="{name: 'by-time-period'}">
                            <v-tab :value="4">By Time period</v-tab>
                        </router-link>
                        <router-link :to="{name: 'videos'}">
                            <v-tab :value="5">Videos</v-tab>
                        </router-link>
                    </v-tabs>
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                    <router-link :to="{name: 'sign-up-user'}">
                        <v-btn v-if="!isLogged" color="orange" class="navigation-btn">Sign up</v-btn>
                    </router-link>
                    <router-link to="/login-user">
                        <v-btn  color="orange" class="navigation-btn">{{ textButtonLogin }}</v-btn>
                    </router-link>
                    <router-link to="/profile-user">
                        <v-btn  v-if="isLogged" color="orange" class="navigation-btn">Profile</v-btn>
                    </router-link>
                </v-col>
            </v-row>    
        </v-container>
        <router-view/>
    </div>
</template>

<script>
//імпортувати IfoUserStore який створили у PINIA
import { useInfoUserStore } from "./store/InfoUserStore.js";

export default {
    name: 'App',
    data() {
        return {
        isLogged: useInfoUserStore().isLogged,
        textButtonLogin: (useInfoUserStore().isLogged) ? 'Log Out' : 'Login',
        }
    },
}
</script>

<style scoped>
    .wrapper {
        border: 1px solid #0df886;
        padding: 0 20px;
        background: black;
        color:white;
    }

    .wrapper h1{
        color: green;
    }

    .navigation-btn {
        margin: 2px;
    }
</style>
