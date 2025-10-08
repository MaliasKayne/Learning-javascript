//Numero primo: solo es divisible por 1 y por si mismo
//Numeros primos: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47
/*function esPrimo(numEval){
    if(numEval <= 3)
        return true;
    for(let i=2; i< numEval; i++){
        if(numEval % i)
            return false;
    }
    return true;
}
console.log(esPrimo(7));
*/
function fibonacciSquence(num) {
    if (num <= 0) return [];
    if (num === 1) return [0];

    let sequence = [0,1];
    for (let i = 2; i <num; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
console.log(fibonacciSquence(11));