const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText,  a * b);
  }
  
  multiplicator(5, 4, 'Multiplied 5 and 4, the result is:');

const addition = (a: number, b: number, printText: string) => {
    console.log(printText, a + b)
}
addition(3,5,"Adding 3 and 5, the result is: ")

type Operation = 'multiply' | 'add' | 'divide' 

const Calculator = (a: number, b: number, op: Operation) => {
    switch (op) {
        case 'multiply':
            return a * b
        case 'add': 
            return a + b 
        case 'divide': 
            if (b) return a / b 
            else {
                return 'cannot divide by 0'
            }
    }
}
console.log(Calculator(5,0,'divide'))