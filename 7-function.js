// let number1 = 100
// let number2 = 2
// let sum = number1 + number2
// console.log(number1, "+", number2, "=", number1 + number2)


// number1 = 50
// number2 = 50
// sum = number1 + number2
// console.log(number1, "+", number2, "=", number1 + number2)
// console.log("the sum of ", number1, " and", number2, "is", sum)

// number1 = 150
// number2 = 50
// sum = number1 + number2
// console.log(number1, "+", number2, "=", number1 + number2)
// console.log("the sum of ", number1, " and", number2, "is", sum)

// function calculationSum() {
//     let number1 = 100
//     let number2 = 2
//     let sum = number1 + number2
//     console.log(number1, "+", number2, "=", number1 + number2)


// }
//calculationSum()

// function double(input) {
//     console.log(`2 * ${input} = ${input * 2}`)

// }
//  double(10)
//  function double(input){
//   console.log(`2* ${input} = ${input * 2}`);
//  }
//  double(99)


// function calculationSum(a, b) {
//     console.log("the sum of value is", a + b);
// }
// calculationSum(20, 30909);
// calculationSum(30, 39);


  
let fruitsData= [
    {
      name: "kiwi",
      scientificName: "k-wrong-xy",
      price: 1000,
    },
    {
      name: "orange",
      scientificName: "k-xyz",
      price: 80,
    },
    {
      name: "apple",
      scientificName: "k-xyz",
      price: 50,
    },
  ]
  
//   console.log(`fruitsdata: ${printdata[0].name}, scientificName: ${printdata[0].scientificName}, price: ${printdata[0].price}`);
//   console.log(`fruitsdata: ${printdata[1].name}, scientificName: ${printdata[1].scientificName}, price: ${printdata[1].price}`);
//   console.log(`fruitsdata: ${printdata[2].name}, scientificName: ${printdata[2].scientificName}, price: ${printdata[2].price}`);
//  console.log(`${num1 + num2}`);
function printFruitprice(index) {
  console.log(`the price of ${fruitsData[index].name} (${fruitsData[index].scientificName}) is ${fruitsData[index].price}`);
}


  // printFruitprice(0)
  // printFruitprice(1)
  // printFruitprice(2)
/* object destructurinig */
function printFruitRate1(fruit){
  console.log("the price of ",fruit.name, "is", fruit.price)

}
function printFruitRate(fruit){
  let {name,scientificName,price} = fruit
  console.log(`the price of ${name} (${scientificName})  is ${price}`)
}
printFruitRate(fruitsData[0])
printFruitRate(fruitsData[1])
printFruitRate(fruitsData[2])

 