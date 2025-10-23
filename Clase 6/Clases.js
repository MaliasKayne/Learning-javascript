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

const userDatabase = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    { username: "user3", password: "pass3" },
    { username: "user4", password: "pass4" }
]

const userTimeline = [
    { username: "user1", timeline: ["Post 1", "Post 2"] },
    { username: "user2", timeline: ["Post A", "Post B"] },
    { username: "user3", timeline: ["Post X", "Post Y"] },
    { username: "user4", timeline: ["Post M", "Post N"] }
]


const userName = prompt("Ingrese su nombre de usuario");
const password = prompt("Ingrese su contraseña");

function usuarioExistente(username, password) {
  for (let i = 0; i < userDatabase.length; i++) {
    if (
      userDatabase[i].username === username &&
      userDatabase[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (usuarioExistente(username, password)) {
    alert(`Bienvenido a tu cuenta ${username}`);
    console.log(userTimeline);
  } else {
    alert("Uuups, usuario o contraseña incorrectos!");
  }
}
