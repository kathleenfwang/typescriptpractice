// to run: ts-node BmiCalculator 
const bmiCalculator = (weight: number, height: number) : String => {

    // bmi = w / h%2 
    const bmi = Math.round(weight / (height * height))
    //       BMI Categories:
    // Underweight = <18.5
    // Normal weight = 18.5–24.9
    // Overweight = 25–29.9
    // Obesity = BMI of 30 or greater
    let result = `BMI: ${bmi}`
    if (bmi < 18.5) {
        return result += ' Underweight'
    }
    else if (bmi >= 18.5 && bmi <=24.9) {
        return result += ' Normal'
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        return result += ' Overweight'
    }
    else {
        return result += ' Obese'
    }
}   

console.log(bmiCalculator(54.4311,1.5748))