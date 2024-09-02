<template>
    <div class="container">
        <v-card  class="mx-auto" max-width="340" color="black">
            <v-img :src="itemUrl" height="200px" cover> </v-img>
            <v-card-title>{{ item.title }}</v-card-title>
            <div>
                <v-row>
                    <v-col>
                        <v-btn  color="indigo" variant="tonal" @click="show =!show"> Details </v-btn>
                    </v-col>
                    <v-spacer> </v-spacer>
                    <v-col>
                        <div @click="redirectTo(item)">
                        <v-btn  color="orange" variant="tonal"> More </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </div>

            <v-expand-transition>
                <div v-show="show">
                <v-divider></v-divider>
                <v-card-text> {{ item.explanation }}</v-card-text>
                </div>
            </v-expand-transition>
                  
        </v-card> 
    </div>
</template>

<script>
    import axiosInstance from "../../services/axios";

    export default {
        name: 'ItemCard',
        props: ['item'],
        data() {
            return  {
                show: false,            
            }
        },
        computed: {
            itemUrl() {
                if (this.item.media_type === "image") {
                    return this.item.url;
                } 

                else if (this.item.media_type == "video" &&  this.item.thumbnail_url !== ""){
                    return this.item.thumbnail_url;
                }
                 
                else {
                return this.item.url;
                }
            }
        },
        methods: {
            redirectTo(item) {
                //this.$router.push('/item-description')
                this.$router.push({
                    name: 'item-description',
                    params: {
                        title: item.title
                    }
                });
            }
        }
    }
</script>


