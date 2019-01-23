<template>
    <div class="auto-complete-field">
        <label :for="name" >{{ label }}</label>
        <div class="input-area">
            <input type="text" 
                :name="name" 
                :id="name"                 
                @keydown.down="onArrowDown"
                @keydown.up="onArrowUp"
                @keydown.enter="onEnter"
                @input="inputTyping($event.target.value)" 
                v-model="inputValue" />        
            
            <ul class="auto-complete-results" v-if="isOpen">    
                <li v-for="(option, index) in typeMatches" 
                    :key="option.id" 
                    :class="{'is-active' : arrowCounter === index}"
                    @click="setInputValue(option.name)" >{{ option.name }}</li>
            </ul>                        
        </div>        
    </div>
</template>

<script>
export default {
    name: "AutoCompleteField",
    props: ["label", "name", "value", "options"],
    
    data() {
        return {
            typeMatches: [],
            isOpen: false,
            inputValue: this.value,
            arrowCounter: 0,
        }        
    },

    watch: {
        inputValue: function(newValue, oldValue) {
            this.$emit('input', newValue)
        },

        value: function(newValue, oldValue) {
            this.inputValue = newValue
        }
    },

    methods: {
        inputTyping(value) {            
            this.isOpen = false      
            this.arrowCounter = -1     

            if (value != '') {
                this.isOpen = true
                this.filterOptions(value)            
            }                        
        },

        filterOptions(value) {            
            this.typeMatches = this.options.filter(function(option) {                
                return option.name.toLowerCase().indexOf(value.toLowerCase()) >= 0
            })

            if (this.typeMatches.length == 0) {
                this.isOpen = false
            }
        },

        hideResults() {
            this.isOpen = false
        },

        setInputValue(value) {
            this.inputValue = value
            this.hideResults()
        },

        handleClickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.hideResults()
            }
        },

        onArrowDown() {
            if (this.arrowCounter < this.typeMatches.length - 1) {
                this.arrowCounter += 1
            }            
        },

        onArrowUp() {
            if (this.arrowCounter > 0) {
                this.arrowCounter -= 1
            }            
        },

        onEnter() {
            this.inputValue = this.typeMatches[this.arrowCounter].name
            this.isOpen = false
            this.arrowCounter = -1
        }
    },

    mounted() {
        document.addEventListener('click', this.handleClickOutside)                
    },

    destroyed() {
        document.removeEventListener('click', this.handleClickOutside)
    }
}
</script>

<style>

    .auto-complete-field {
        display: flex;     
        flex-direction: column;
        padding: 8px 0px;   
    }

    .auto-complete-field label {                        
        flex-grow: 1;                      
        padding: 8px 0px;         
        box-sizing: border-box;
    }

    .auto-complete-field .input-area {
        display: flex;
        flex-direction: column;
        flex-grow: 1;         
    }

    .auto-complete-field .input-area input {
        flex-grow: 1;
        padding: 8px 8px;
        font-size: 16px;     
        border-radius: 4px;
        border: 1px solid #DEDEDE;     
    }

    .auto-complete-field .input-area .sufix {
        flex-grow: 1;                 
        padding: 8px 0px 8px 16px;     
        color: #979797;           
    }

    .auto-complete-field .auto-complete-results {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        background-color: #FFFFFF;
        border: 1px solid #DEDEDE;
        border-radius: 4px;  
        margin-top: 42px;        
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);              
        position: absolute;
        width: calc(100% - 32px);
        max-width: 928px;
        box-sizing: border-box;
    }

    .auto-complete-field .auto-complete-results li {
        flex-grow: 1;
        list-style: none;
        padding: 8px;      
        color: #979797;
        transition: .2s ease-out;        
    }
    
    .auto-complete-field .auto-complete-results li:hover,
    .auto-complete-field .auto-complete-results li.is-active {
        color: #2c3e50;
        background-color: #FFDCDA;              
    }

</style>
