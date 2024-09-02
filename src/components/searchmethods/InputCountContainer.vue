<template>
    <div class="container">
        <h3>Search in a random way</h3>
        <v-container max-width="50vw"> 
            <v-row >
                <v-col>
                    <v-text-field label="Quantity for random selection:" 
                        placeholder="1"  
                        type="number"  min="1" max="100" 
                        v-model="count"
                    ></v-text-field>
                    <!-- <v-sheet class="error" v-show="!verifyCount()"> {{ error }}</v-sheet> -->
                    <v-sheet class="error" v-if="!verifyCount()"> 
                        {{ error }}
                    </v-sheet>
                    <v-btn  color="indigo" variant="tonal" v-show="verifyCount()" @click="showItemsByCount()"> 
                        Show {{ count }} items 
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
        <ItemsByCount v-bind:user-count="userCount"  v-if="show"/>
    </div>
</template>

<script>
    import ItemsByCount from '@/components/getitems/ItemsByCount.vue';

    export default {
        name: 'InputCountContainer',
        components: {
            ItemsByCount,
        },
        data() {
            return  {
                count: 1,
                error: '',
                show: false,
            }
        },
        computed: {
            userCount() {
                this.show = false;

                if (this.verifyCount()){
                    return this.count;
                }

                return 1;
            }
        },
        methods: {
            verifyCount() {
                let count = this.count;

                if(!count || !Number.isInteger(+count) || count <= 0 || count > 100) {
                    this.error = 'Value must be positive integer, no greater than 100';
                    this.show = false;            
                return false;           
                }

                return true;
            },
            showItemsByCount() {
                this.userCount;
                this.show = true;
            },
        }
    }
</script>

<style scoped>
    .error {
        background-color: black;
        color: red;
    }
</style>
