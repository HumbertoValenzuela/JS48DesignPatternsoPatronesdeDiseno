// 7. Mixin Pattern
// Mixins, es una forma de agregar funciones a una clase una vez que ha sido creada...

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }    
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

// Funciones Externas que se compartirán entre diferentes clases
// La idea de los mixin es que puedes crear un objeto con multiples 
// funciones, tener uno o varias clases que puedan utilizar y convinen
const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.nombre} Email:${this.email}`)
    },
    mostrarNombre() {
        console.log(`Mi nombre es ${this.nombre}.`);
    }
}

// Agregando el Objeto de funciones a las clases
// Esto hará que en el __proto_ de la clase se agregue mostrarInformacion
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);

const persona = new Persona('Humberto', 'correo@coore.com');
console.log(persona);

// Utilizando la funcion mostrarInformacion
// Añadir funcionesPersona a la clase de PErsona
persona.mostrarInformacion();
persona.mostrarNombre();

// Añadir funcionesPersona a la Clase Cliente
 const cliente = new Cliente ('Valenzuela', 'Cliente@Cliente.com');
 console.log(cliente);
 cliente.mostrarInformacion();
 cliente.mostrarNombre();