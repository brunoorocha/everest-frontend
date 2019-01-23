<template>
    <div class="app-scene">
        <nav-bar />
        <div class="content container">
            <form-steps :currentStep=" currentStep " />

            <form class="add-recipe-form" @submit.prevent="">
                <div v-if="currentStep === 1">
                    <text-field label="Título da receita:" name="title" v-model="formValues.title" :value="formValues.title" />
                    <text-area label="Descrição: " name="description" v-model="formValues.description" :value="formValues.description" />
                    <number-field label="Rendimento:" name="yield" sufix="porções" v-model="formValues.yield" :value="formValues.yield" />
                    <number-field label="Tempo de preparo:" name="duration" sufix="minutos" v-model="formValues.duration"  :value="formValues.duration" />   
                    <dropdown label="Categoria: " name="category" :options="categoryOptions" v-model="formValues.category" :value="formValues.category" />
                    <dropdown label="Dificuldade: " name="difficulty" :options="difficultyOptions" v-model="formValues.difficulty" :value="formValues.difficulty" />
                    <image-picker label="Imagem da receita: " name="image" />                                                                 
                </div> 

                <div v-if="currentStep === 2">
                    <div class="ingredient-form" v-for="(ingredient, index) in formValues.ingredients" v-bind:key="ingredient.id">
                        <div class="row">
                            <h3 class="column-6">Ingrediente {{ index + 1 }}</h3>
                            <input type="button" class="column-1 button remove-button remove-btn" value="remover ingrediente" @click="removeIngredient(ingredient)" />
                        </div>                        
                        <auto-complete-field label="Nome do ingrediente:" :name="'ingredient-name' + index" :options="foodsOptions" v-model="ingredient.name" />       
                        <div class="row">
                            <number-field label="Quantidade:" class="column-6" :name="'ingredient-quantity' + index" v-model="ingredient.quantity" :value="ingredient.quantity" />        
                            <dropdown label="Unidade de medida" :options="unitOptions" :name="'ingredient-unit' + index" class="column-1" v-model="ingredient.unit" :value="ingredient.unit" />
                        </div>                  
                    </div>                    
                    <input type="button" class="button" value="Adicionar ingrediente" @click="addIngredient" />                    
                </div>

                <div v-if="currentStep === 3">     
                    <div class="step-form" v-for="(step, index) in formValues.parts.steps" v-bind:key="step.id">
                        <div class="row">
                            <h3 class="column-6">Passo {{ index + 1 }}</h3>
                            <input type="button" class="column-1 button remove-button remove-btn" value="remover passo" @click="removeStep(step)" />
                        </div>

                        <text-area label="Descrição do passo: " :name=" 'step-overview' + index " v-model="step.overview" :value="step.overview" />
                        <number-field label="Duração: " :name=" 'step-duration' + index " v-model="step.duration" :value="step.duration" sufix="segundos" />
                    </div>                               

                    <input type="button" class="button" value="Adicionar passo" @click="addStep" />                    
                </div> 

                <step-control :currentStep="currentStep" :lastStep="numberOfSteps" :prevFunction="prev" :nextFunction="next" />
            </form>
        </div>        
    </div>
</template>

<script>
import Ingredient from "../models/Ingredient.js"
import Step from "../models/Step.js"
import NavBar from "../components/NavBar"
import FormSteps from "../components/FormSteps"
import TextField from "../components/TextField"
import NumberField from "../components/NumberField"
import AutoCompleteField from "../components/AutoCompleteField"
import TextArea from "../components/TextArea"
import Dropdown from "../components/Dropdown"
import ImagePicker from "../components/ImagePicker"
import StepControl from "../components/StepControl"
import axios from "axios"

export default {
    name: "AddRecipe",
    components: { NavBar, TextField, FormSteps, TextArea, Dropdown, ImagePicker, NumberField, AutoCompleteField, StepControl },

    data() {
        return {
            currentStep: 1,
            numberOfSteps: 3,

            formValues: {
                title: "",
                description: "",
                yield: "0",
                duration: "0",
                category: 1,
                difficulty: 1,
                ingredients: [],
                parts: {
                    steps: []
                },
            },

            categoryOptions: [],

            difficultyOptions: [],

            unitOptions: [],

            foodsOptions: [],

        }        
    },

    methods: {
        prev() {
            this.currentStep--
        },

        next() {
            this.currentStep++
        },

        addIngredient() {
            this.formValues.ingredients.push(new Ingredient.blank())
        },

        removeIngredient(ingredient) {
            var filtered = this.formValues.ingredients.filter(function(item) {
                return item !== ingredient
            })            

            this.formValues.ingredients = filtered
        },

        addStep() {
            this.formValues.parts.steps.push(new Step.blank())
        },

        removeStep(step) {
            var filtered = this.formValues.parts.steps.filter(function(item) {
                return item !== step
            })

            this.formValues.parts.steps = filtered
        },
        
        fetchCategories() {
            axios.get('http://localhost/api/v1/categories')
            .then(response => {             
                this.categoryOptions = response.data                
            })
            .catch(error => {
                console.log(error)                
            })   
        }, 

        fetchUnits() {
            axios.get('http://localhost/api/v1/units')
            .then(response => {             
                this.unitOptions = response.data                
            })
            .catch(error => {
                console.log(error)                
            }) 
        },

        fetchDifficulties() {
            axios.get('http://localhost/api/v1/difficulties')
            .then(response => {             
                this.difficultyOptions = response.data                
            })
            .catch(error => {
                console.log(error)                
            }) 
        },

        fetchFoods() {
            axios.get('http://localhost/api/v1/foods')
            .then(response => {             
                this.foodsOptions = response.data                                
            })
            .catch(error => {
                console.log(error)                
            }) 
        }
    },

    created() {
        this.fetchCategories()
        this.fetchUnits()
        this.fetchDifficulties()
        this.fetchFoods()
    }
}

</script>

<style>
    
    .app-scene {
        display: flex;   
        flex-direction: column;             
    }        

    .add-recipe-form {        
        margin-top: 16px;                
    }    

    .remove-btn {
        text-align: right;
        align-self: flex-end;
    }
    
</style>
