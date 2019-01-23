<template>
    <div class="text-input">
        <label :for="name" >{{ label }}</label>
        <div class="input-area">
            <input type="text" :name="name" :id="name" v-on:input="$emit('input', $event.target.value)" :value="value" />        
            <div v-if="sufix" class="sufix">{{ sufix }}</div>
        </div>        
    </div>
</template>

<script>
export default {
    name: "TextField",
    props: ["label", "name", "sufix", "value"],
}
</script>

<style>
    .text-input {
        display: flex;     
        flex-direction: column;
        padding: 8px 0px;   
    }

    .text-input label {                        
        flex-grow: 1;                      
        padding: 8px 0px;         
        box-sizing: border-box;
    }

    .text-input .input-area {
        display: flex;
        flex-grow: 1;         
    }

    .text-input .input-area input {
        flex-grow: 1;
        padding: 8px 8px;
        font-size: 16px;     
        border-radius: 4px;
        border: 1px solid #DEDEDE;     
    }

    .text-input .input-area .sufix {
        flex-grow: 1;                 
        padding: 8px 0px 8px 16px;     
        color: #979797;           
    }
</style>
