/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
    this.sum = () => {
      return number1+number2;
    }
    this.subtraction = () => {
        return number1 - number2;
    }
    this.multiplication = () => {
        return number1 * number2;
    }
    this.division = (sign) => {
        return number1 / number2;
    }
  }
  
  const myNumbers = new Calculator(2,4);
  console.log(myNumbers.sum());
  console.log(myNumbers.subtraction());
  console.log(myNumbers.multiplication());
  console.log(myNumbers.division());
 