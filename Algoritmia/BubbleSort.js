let numeros = [5, 3, 8, 4, 2, 9, 11 ,10,  6, 1, 7];

for (let i = numeros.length - 1; i >= 0; i--) {
    
    for(let j = 0; j < i; j++) {
        if(numeros[j] > numeros[j + 1]) {
            const temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}
console.log(numeros);