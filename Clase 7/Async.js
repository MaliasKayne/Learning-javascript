// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"), 500);
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let operationSuccessful = true;
//         if (operationSuccessful) {
//             resolve("La operación fue exitosa!");
//         } else {
//             reject("Falló la operación");
//         }
//     }, 2000);
// });

// promise
//     .then((successMessage) => {
//         console.log(successMessage);
//     })
//     .catch((errorMessage) => {
//         console.log(errorMessage);
//     });

function fetchData() {
    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}

fetchData();

