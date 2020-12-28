type Operation = 'multiply' | 'add' | 'divide' 
// describes type of input
type Result = number
const Calculator = (a: number, b: number, op: Operation): Result => {
    switch (op) {
        case 'multiply':
            return a * b
        case 'add': 
            return a + b 
        case 'divide': 
            if (b) return a / b 
            else {
                throw new Error('cannot divide by 0')
            }
        default:
            throw new Error('Operation has to be multiply, add or divide!')
    }
}
const a = 2
const b = 0
const operation = "add"
try {
    console.log(Calculator(a,b,operation))
}
catch(e) {console.log("Error: ", e.message)}