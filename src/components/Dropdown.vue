<template>
    <div class="dropdown">
        <label :for="name">{{ label }}</label>
        <select :name="name" :id="name" @input="$emit('input', $event.target.value)">
            <option v-for="option in options" v-bind:key="option.id" :value="option.id" :selected="value == option.id ? true : false">{{ option.value ? option.value : option.type }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "Dropdown",
    props: ["name", "label", "value", "options"],   

    created() {
        this.$emit('input', this.value)
    },
}
</script>

<style>

    .dropdown {
        display: flex;     
        flex-direction: column;
        padding: 8px 0px;   
    }

    .dropdown label {                
        flex-grow: 1;                
        padding: 8px 0px;        
        box-sizing: border-box;
    }

    .dropdown select {
        flex-grow: 1;
        -webkit-appearance: none;
        padding: 8px 8px;
        font-size: 16px;     
        border-radius: 4px;
        background-color: #FFFFFF;
        border: 1px solid #DEDEDE;     
    }

</style>
