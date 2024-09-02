<template>
        <div>
            <v-select 
                v-model="userSelected"
                label="Select"
                :items="[
                    'Search in a random way', 
                    'Search by date', 
                    'Search by time period',
                    'Search videos' 
                ]"
                variant="outlined"
            ></v-select>
        </div>
</template>

<script>
export default {
    name: 'CustomSelect',
    data() {
        return  {
            userSelected: null
        }
    },
    watch: {
        userSelected(value) {
            this.$emit('change-selected',value);
        }
    }
}
</script>
