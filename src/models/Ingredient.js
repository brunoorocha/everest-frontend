export default class Ingredient {
    constructor() {
        this.id = null
        this.name = null
        this.quantity = null
        this.unit = null
    }

    static blank() {
        var ingredient = new Ingredient()
        ingredient.id = null
        ingredient.name = ""
        ingredient.quantity = 0
        ingredient.unit = 1
        return ingredient
    }
}