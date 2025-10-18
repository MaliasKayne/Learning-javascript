// let canasta = ["manzana", "uva", "pera"];
// for (item of canasta) {
//   console.log(item);
// }

/*

for in ----> objetos

propiedades = valor

array, string

item

for (variable in objeto) {
  código a ejecutar

}

*/

// const listaDeCompras = {
//   manzana: 5,
//   uva: 10,
//   pera: 3,
//   naranja: 2
// }

// for (fruta in listaDeCompras) {
//   console.log(fruta);
// }

// for (fruta in listaDeCompras) {
//   console.log(`${fruta} : ${listaDeCompras[fruta]}`);
// }

/*
while (condición) {
  código a ejecutar
}
*/

// let contador = 0;

// while (contador < 10) {
//   console.log(contador);
//   contador++;
// }

// const justOneNumber = Array{12}
// console.log(justOneNumber);

// const number = Array{1, 2, 3, 4, 5,}
// console.log(number);

//array literal syntax

// const oneNumber = Array[12];
// console.log(oneNumber);

// const emptyArray = [];
// console.log(emptyArray);

// const sports = ["soccer", "tennis", "rugby"];
// console.log(sports);

// const recipeIngredients = [
//   "flour",
//   true,
//   2,
//   {
//     ingredient: "Milk", quantity: "One Cup"
//   },
//   false
// ]
// console.log(recipeIngredients);

// Array fruit

// const fruits = ["apple", "banana", "orange"];
// console.log(fruits);

// // Accesing Array Elements

// const firstFruit = fruits[0];
// console.log(firstFruit);

// // Length propety

// const numberOfFruits = fruits.length;
// console.log(numberOfFruits);

// // Mutability

// fruits.push("watermelon");
// console.log(fruits);

// // Immutability

// const newFruits = fruits.concat(["grape", "kiwi", "pear"]);
// console.log(fruits);
// console.log(newFruits);

// // Checking arrays with Array.isArray()

// console.log(Array.isArray(fruits));

// sum all elements in an array

// const numbersArray = [1, 2, 3, 4, 5];
// let sum = 0;
// for (numero of numbersArray) {
//   sum += numero; //+= es una forma corta de escribir sum = sum + numero
// }
// console.log(sum);

// const array = [1, 2, 3, 4, 5];

// const mapped = array.map((X) => X * 10); //The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

// console.log(mapped);

// const array = [4, 10, 58, 23, 2]

// const filtered = array.filter((X) => X > 3); //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// console.log(filtered);

// const animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];

// console.log(animals.slice(1)) //The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// console.log(animals.slice(1, 3))

// console.log(animals.slice(2, 4))

// console.log(animals.slice(-3))

// const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];

// console.log(foods);

// console.log(foods.pop()) //The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

// console.log(foods);

// console.log(foods.pop())

// console.log(foods);

// const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];

// foods.sort(); //The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

// console.log(foods);


// const array = [4, 10, 58, 23, 2]

// array.sort((a, b) => a - b); //This variant is to sort with numbers in ascending order.

// console.log(array);

// const array = [4, 10, 58, 23, 2]

// const found = array.find((X) => X > 10); //The find() method returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.

// console.log(found);

// const array = [4, 10, 58, 23, 2]

// const foundIndex = array.findIndex((X) => X > 10); //The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

// console.log(foundIndex);

// const carrito = [
//   { nombre: "manzana", cantidad: 2, precio: 3 },
//   { nombre: "banana", cantidad: 5, precio: 1 },
//   { nombre: "pera", cantidad: 1, precio: 4 },
//   { nombre: "naranja", cantidad: 3, precio: 2 },
// ];

// const total = carrito.reduce((acc, item) => acc + item.precio, 0); //The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// console.log("Total a pagar: $" + total);

const animalsAndFood = ['cat', 'dog', 'elephant', 'bee', 'ant', 'cat', 'dog','elephant', 'bee', 'ant', 'pizza', 'burger', 'fingerChips', 'donuts', 'springRoll', 'pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];

const duplicatedAnimalsAndFood = animalsAndFood.reduce((acc, currentValue) => {
  if (acc[currentValue]) {
    acc[currentValue]++;
  } else {
    acc[currentValue] = 1;
  }
  return acc;
}, {});

console.log(duplicatedAnimalsAndFood);