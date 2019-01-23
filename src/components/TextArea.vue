<template>
    <div class="text-input">
        <label :for="name" >{{ label }}</label>
        <div class="input-area">
            <textarea :name="name" :id="name" @input="$emit('input', $event.target.value)" :value="value"></textarea>
        </div>        
    </div>
</template>

<script>
export default {
    name: "TextArea",
    props: ["label", "name", "value"]
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
        margin-right: 16px;
        box-sizing: border-box;
    }

    .text-input .input-area {
        display: flex;
        flex-grow: 1;        
    }

    .text-input .input-area textarea {
        flex-grow: 1;
        padding: 8px 8px;
        font-size: 16px;     
        border-radius: 4px;
        border: 1px solid #DEDEDE;     
        resize: none;
        height: 80px;
    }
</style>
