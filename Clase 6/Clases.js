// class Animal {
//     constructor(nombre, tipo) {
//         this.nombre = nombre;
//         this.tipo = tipo;
//     }
//     emitirSonido() {
//         console.log("El animal hace un sonido");
//     }
// }

// class Perro extends Animal {
//     constructor(nombre, tipo, raza) {
//         super(nombre, tipo);
//         this.raza = raza;
//     }
//     emitirSonido() {
//         console.log("El perro ladra: Guau Guau");
//     }
//     correr() {
//         console.log(`${this.nombre} está corriendo`);
//     }
// }

// const perro1 = new Perro('Bobby', 'Perro', 'Pug');

// console.log(perro1);
// perro1.correr();
// perro1.emitirSonido();

// perro1.nuevoMetodo = function () {
//     console.log("Este es un nuevo método agregado dinámicamente");
// }

// perro1.prototype.segundoMetodo = function () {
//     console.log("Este es otro nuevo método agregado dinámicamente");
// Animal.prototype.tercerMetodo = function () {
//   console.log("Un metodo más");
// };

/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

const username = prompt("Cuál es tu usuario?");
const password = prompt("Cuál es tu contraseña?");

function usuarioExistente(username, password) {
  for (let i = 0; i < usersDatabase.length; i++) {
    if (
      usersDatabase[i].username === username &&
      usersDatabase[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (usuarioExistente(username, password)) {
    alert(`Bienvenido a tu cuenta ${username}`);
    console.log(usersTimeline);
  } else {
    alert("Uuups, usuario o contraseña incorrectos!");
  }
}

signIn(username, password);
