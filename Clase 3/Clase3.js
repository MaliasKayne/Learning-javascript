// let num1 = 2;
// let num2 = 1;
// let num3 = 6;

// if (num1 > num2 && num1 > num3) {
//      console.log(num1)
//     } else if (num2 > num3) {
//      console.log(num2)
//     } else {
//      console.log(num3)
// }

//suma de numeros impares de un numero y suma de sus numero pares


// let numPrincipal = parseInt(prompt("Ingrese un número entero positivo:"));
// let numsImpar = [];
// let numsPar = [];
// let sumaimpar = 0;
// let sumapar = 0;

// for (let i = 1; i <= numPrincipal; i++) {
//     if (i % 2 === 0) {
//         numsPar.push(i);
//         for (let i = 0; i < numsPar.length; i++) {
//             sumapar += numsPar[i];
//         }

//     } else {
//         numsImpar.push(i);
//         for (let i = 0; i < numsImpar.length; i++) {
//             sumaimpar += numsImpar[i];
//         }

//     }
// }
// console.log("Numeros par " + numsPar);
// console.log("Numeros impar " + numsImpar);

// console.log("Suma de numeros pares " + sumapar);
// console.log("Suma de numeros impares " + sumaimpar);


// encontrar el numero mas pequeño en un array
// let min = nums[0];
// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > min) {
//         min = nums[i];
//     }
// }
// console.log("tamaño del array: " + numIngresado);
// console.log('Números generados:', nums);
// console.log('Número más pequeño:', min);



// generar un array dado por el usuario y encontrar los numeros mas grandes de otro numero dado por el usuario


// const numIngresado = parseInt(prompt("Ingrese un número entero positivo para el array:"));
// let nums = [];
// for(let i = 1; i <= numIngresado; i++) {
//     const randomNum = Math.floor(Math.random() * 100) + 1;
//     nums.push(randomNum);
// }

// const x = parseInt(prompt("Ingrese un número para comparar:"));
// let mayoresQueX = [];
// for (let i = 0 ; i < nums.length; i++) {
//     if (nums[i] > x) {
//         mayoresQueX.push(nums[i]);
//     }
// }
// console.log("tamaño del array: " + numIngresado);
// console.log('Números generados:', nums);
// console.log(`Números mayores que ${x}:`, mayoresQueX);
