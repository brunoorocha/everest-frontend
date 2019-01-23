
export default class Step {
    constructor() {
        this.id = null
        this.overview = null
        this.duration = null
        this.step_number = null
    }

    static blank() {
        var step = new Step()
        step.id = null
        step.overview = ""
        step.duration = ""
        step.step_number = null
        return step
    }
}