<template>
    <div class="image-picker">
        <label :for="name">{{ label }}</label>
        <input type="file" :name="name" :id="name">
        <label :for="name" class="image-picker-button">Escolher imagem</label>
    </div>
</template>

<script>
export default {
    name: "ImagePicker",
    props: ["name", "label"]
}
</script>

<style>

    .image-picker {
        display: flex;     
        flex-direction: column;
        padding: 8px 0px;   
    }

    .image-picker label {                
        flex-grow: 1;                
        padding: 8px 0px;        
        box-sizing: border-box;
    }

    .image-picker input {
        display: none;
    }

    .image-picker .image-picker-button {
        color: #FF5245;
        cursor: pointer;
    }

</style>
