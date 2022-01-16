class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined 
        }
    
    deletes(){
        this.currentOperand = this.currentOperand.toString().slice(0,  -1)
    dff
    }
    
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
        
    chooseOperation(operation){
        if(this.currentOperand === '') return
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
        
    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+': 
                computation = prev + current
                break
                case '-': 
                computation = prev - current
                break
                case '*': 
                computation = prev * current
                break
                case '/': 
                computation = prev / current
                break
                default:
                    return
         }
         this.currentOperand = computation
         this.operation = undefined
         this.previousOperand = ''
        }
        
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if(isNaN(integerDigits)){
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en',{
            maximumFractionDigits: 0})
            }
            if(decimalDigits != null){
                return `${integerDisplay}.${decimalDigits}`
              } else{
                return integerDisplay
              }
        
    }
        

    updateDisplay(){
    this.currentOperandTextElement.innerText = 
        this.getDisplayNumber(this.currentOperand)
    if(this.operation != null) {
     this.previousOperandTextElement.innerText =
        `${this.previousOperand}  ${this.operation}`   


    }
 }
}


   



const numberBottons = document.querySelectorAll('[data-number]')
const operationBottons = document.querySelectorAll('[data-operation]')
const equalsBottons = document.querySelector('[data-equals]')
const deleteBottons = document.querySelector('[data-delete]')
const allClearBottons= document.querySelector('[data-allClear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement  = document.querySelector('[data-current-operand]')

const calculator = new Calculator
(previousOperandTextElement,currentOperandTextElement)

numberBottons.forEach(button => {
  button.addEventListener('click',() => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })   
})


operationBottons.forEach(button => {
    button.addEventListener('click',() => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })   
})

equalsBottons.addEventListener('click', botton => {
      calculator.compute()
      calculator.updateDisplay()
})

allClearBottons.addEventListener('click', botton => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteBottons.addEventListener('click', botton => {
    calculator.deletes()
    calculator.updateDisplay()
})





  