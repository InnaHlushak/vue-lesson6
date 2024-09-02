<template>
    <div class="custom">
        <label for="custom">Other: </label>
        <input type="text" id="custom"  @input="$emit('update:modelValue',$event.target.value)" :value="modelValue"/>
    </div>
</template>

<script>
export default {
    name: 'CustomInput',
    props:['modelValue'],
    emits:['update:modelValue'],
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.custom input {
    width: 300px;
    color:white;
    border-bottom: 1px solid white;
}
</style>