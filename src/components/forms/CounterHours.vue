<template>
    <v-container>
        <v-row >
            <v-col  cols="6">
            <span>Enter how many hours per day you plan to work with this site:</span>
            </v-col>
            <v-col>
            <v-text-field type="text" width="50" v-model="time"> </v-text-field>
            </v-col>
            <v-col>
            <v-btn  color="indigo" @click="+time++"> + </v-btn>
            <v-btn  color="blue" @click="(time <= 1) ? 1 : +time--"> - </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
    export default {
        name: 'CounterHours',
        data() {
            return {
                time: 1,
            }
        }
    }
</script>

