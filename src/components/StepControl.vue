<template>
    <div class="step-control-area">
        <div class="container">
            <div class="row">
                <input type="button" v-if="currentStep > 1" class="button step-control prev" value="Anterior" @click.prevent="prevFunction">            
                <input type="button" v-if="currentStep < lastStep" class="button step-control next" value="Próximo" @click.prevent="nextFunction">
            </div>                            
        </div>                        
    </div>
</template>

<script>
export default {
    name: "StepControl",
    props: ["currentStep", "lastStep", "prevFunction", "nextFunction"],    
}
</script>

<style>
    .step-control-area {
        justify-content: center;
        display: flex;
        flex-grow: 1;           
        padding: 8px 0px;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        background-color: #FFFFFF;
        border-top: 1px solid #DEDEDE;
    }
    
    .step-control-area .step-control {
        flex-grow: 1;        
    }

    .step-control-area .prev {
        text-align: left;
    }

    .step-control-area .next {
        text-align: right;
    }
</style>
