<template>
    <div class="form-steps">
        <div v-for="step in steps" class="step" :class="step.id <= currentStep ? 'step-active' : ''" v-bind:key="step.id">            
            <div class="step-path">
                <div class="progress"></div>
            </div>
            <span class="step-bullet"></span>
            <span class="step-label">{{ step.label }}</span>                        
        </div>
    </div>
</template>

<script>
export default {
    name: "FormSteps",
    props: ["currentStep"],
    data() {
        return {
            steps: [
                {id: 1, label: "Dados da receita", isActive: true},
                {id: 2, label: "Ingredientes", isActive: false},
                {id: 3, label: "Passo a passo", isActive: false},
            ]
        }
    }
}
</script>

<style>
    .form-steps {
        display: flex;   
        flex-grow: 1;                
        margin: 48px 0px 16px 0px;    
    }

    .form-steps .step {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;  
    }
    
    .form-steps .step .step-label {        
        margin-top: 16px;
        color: #A2A2A2;
    }
    
    .form-steps .step .step-bullet {     
        background-color: #FFFFFF;                                 
        border: 3px solid #FFDCDA;
        width: 16px;
        height: 16px;
        border-radius: 8px;  
        box-sizing: border-box;     
        position: relative; 
    }

    .form-steps .step-active .step-label {                              
        color: #374050;
    }

    .form-steps .step-active .step-bullet,
    .form-steps .step-current .step-bullet {                                      
        border: 3px solid #FF5245; 
    }

    .form-steps .step-path {
        display: flex;
        background-color: #FFDCDA;
        width: 100%;
        height: 3px;        
        position: relative;
        top: 9px;        
    }

    .form-steps .step-path .progress {
        display: flex;
        background-color: #FF5245;
        width: 0%;
        height: 3px;
    }

    .form-steps .step-active .step-path .progress {
        width: 100%;           
    }

    .form-steps .step-current .step-path .progress {
        width: 50%;                      
    }

</style>
