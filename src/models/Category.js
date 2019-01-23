import axios from "axios"

export default class Category {  
    static fetchCategories() {
        var categories = []

        axios.get('http://localhost/api/v1/categories')
        .then(response => {             
            categories = response.data                        
        })
        .catch(error => {
            console.log(error)                
        })   

        return categories
    }
}