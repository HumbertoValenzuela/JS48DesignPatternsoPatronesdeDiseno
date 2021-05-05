# JS48DesignPatternsoPatronesdeDiseno
48. Design Patterns o Patrones de Diseño en JavaScript
* 1. Qué son los Design Patterns
```javascript
// 1. Qué son los Design Patterns
// Son soluciones a problemas de diseño de código
// Ej: si repites código, si adoptas un patrón de diseño; el problema se resolvera
// Son soluciones probadas y evitan la forma de escribir código "A la pinta de cada Programador"
// Categorías de Patrones
// De creación: Permiten crear objetos y permiten la reutilización del código
// De estructura: Explican como deben comunicarse los objetos y clases
// en grandes proyectos.
// Comportamiento: Se encargan de como se comportan y comunican los objetos

// 2. Class Pattern: Utilizar clases para la creación de los objetos.
// Es un Patrón de Diseño de Creación, es decir, como debe crear los objetos

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('humberto', 'hvg@hvg.com');
console.log(persona);
```

* 3. Constructor Pattern: es cuando utilizamos una clase base 
```javascript
// 3. Constructor Pattern: es cuando utilizamos una clase base 

// en JS la Clase Principal y sobre ella vamos heradando las demás.
// Tambien es conocido como clases abstractas, es decir, no se pueden 
// instanciar la clase Padre.
// En JS no tiene soporte para clases abstractas
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

// Agregando nuevos atributos en el constructor hijo
class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);//esto hace referencia a los atributos de la clase padre
        this.empresa = empresa;
    }
}

const cliente = new Cliente('Humberto', 'Correo@voo.com', 'MiEmpresa');
console.log(cliente);

const persona = new Persona('Rodolfo', 'email@email');
console.log(persona);
```

* 4 Singleton (creación)
```javascript
//4 Singleton (creación)no te va a permitir crear múltiples instancias de una clase.
// , en cambio te va a retornar el objeto ya instanciado...
// A veces es útil tener un objeto con toda la info. para no estar creando
// multiples instacias

let instancia = null;//No tendrá nada la instancia, y cuando se instancia
// se llenará la variable let instancia con ciera info.
class Persona {
    constructor(nombre, email) {
        if(!instancia){
        this.nombre = nombre;
        this.email = email;
        instancia = this; // y eso ya una vez que se llene de valores nombre y email. le asignará un valor a instancia
        } else {
            return instancia;
        }
    }
}

const persona = new Persona('Humberto', 'Correo@correo.cl');
console.log(persona);

// Al instanciar el mismo objeto por segunda vez con nuevos datos 
// (persona2), pues no me dejará porque instancia tiene los datos
// de persona 
const persona2= new Persona('Cecilia', '2Correo@correo.cl');
console.log(persona2);
// Singleton no te va a permiter intanciar objetos con la misma clase
// Veamos como se realiza en JavaScript
```
 5. Factory (creación)
```javascript
// 5. Factory (creación) Es una forma de crear objetos basados en cierta condición
// Comparte algunos atributos pero en base a esas condiciones, esos
// atributos algunos se reutilizan  y otros son diferentes

class InputHTML {
    constructor(type, nombre) {
        this.type = type;
        this.nombre = nombre;
    }

    crearInput() {
        return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`;        
    }
}

class HTMLFactory {
    crearElemento(tipo, nombre) {
        switch (tipo) {
            case 'text':
                return new InputHTML(tipo, nombre);                
                break;
            case 'tel':
                return new InputHTML(tipo, nombre);
                break;
            case 'email':
                return new InputHTML(tipo, nombre);
                break;        
            default:
                return;
        }
    }
}

// ¿Cómo vamos a utilizar ese HTMLFactory para que cree las instancias de
// InputHTML y nos traiga el crearInput?
const elemento = new HTMLFactory();
const inputText = elemento.crearElemento('text', 'nombre-cliente');
console.log(inputText.crearInput());

const elemento2 = new HTMLFactory();
const inputText2 = elemento2.crearElemento('tel', 'telefono-cliente');
console.log(inputText2.crearInput());

const elemento3 = new HTMLFactory();
const inputText3 = elemento3.crearElemento('email', 'email-cliente');
console.log(inputText3.crearInput());
```
* 6 Module Organizar código
```javascript
// Organizar código

// Module, Probablemente el más popular de todos, ya lo hemos utilizado...

// Su Sintaxis era un poco diferente antes, ahora ya tenemos modules en JavaScript por lo tanto ya se siente como una solución más natural, ya que antes parecia algo muy sacado de la manga...

// Nueva forma con ECMAScript6
const mostrarCliente = nombre => {
    console.log(nombre);
}

export default mostrarCliente

// Antiguamente se realiza así
// Proteger la variable creando un IIFE
var module1 = (function() {
    const nombre = 'Juan';
    function hola() {
        console.log('hola');
    }
    return {
        // Nombre se puede llamar de otro archivo así module1.nombre y
        // module1.hola();
        nombre,
        hola
    }
})();
```
* 7. Mixin Pattern
```javascript
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
```

* 8. Namespace (organización)
```javascript
// 8. Namespace (organización)
// ayuda a evitar colision con nombres en el scope global de javascript.

// La idea del namespace es crear un objeto global alrededor de tu 
// aplicación y agregar todas las funciones dentro en lugar de crear 
// múltiples funciones y objetos que se puedan acceder de forma global.

// Se le dice NameSpace porque sobre el objeto restaurantApp. Se colocarán
// todos los datos, funciones y todas las operaciones. De esta forma se 
// evita el choque de nombre de funciones en el Scope Global

// NameSpace restaurantApp
const restaurantApp = {};

// Definir un propiedad platillos como un arreglo y despúes un objeto
restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 26
    },
    {
        platillo: 'Hamburguesa',
        precio: 27
    },
    {
        platillo: 'Hot Dog',
        precio: 28
    }
];

// Agregando funciones de tipo objeto
restaurantApp.funciones = {
    // Función que muestra el Menú
    mostrarMenu: (platillos) => {
        console.log(`Bienvenido a nuestro Menú`);

        platillos.forEach( (platillo, index) => {
            console.log(`${index} : ${platillo.platillo} $${platillo.precio}`);
        });
    },
    // Creando una segundo función llamada ordenar
    ordenar: id => {
        console.log(`Tu platillo: "${restaurantApp.platillos[id].platillo}" se esta preparando. Y tendrá un valor de "$${restaurantApp.platillos[id].precio}"`)
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        };
        restaurantApp.platillos.push(nuevo);
    }
}

// Utilizar mostrarMenu. esto ya podría chocar con otra función
// mostrarMenu(); así se llama la función comunmente



// Utilizando la función ordenar
restaurantApp.funciones.ordenar(1);//Posición 1 del arreglo restaurantApp.platillos
restaurantApp.funciones.agregarPlatillo('Taco', 29);

// Destructuring
// mostrarMenu y para poder seleccionar algo, pasar el menu restaurantApp.platillos
const { platillos} = restaurantApp;

// Utilizando mostrarMenu con namespace, es decir, dificil que choque con otro
restaurantApp.funciones.mostrarMenu(platillos);//Pasar platillos a la función
```

* 9. Mediator
```javascript
// 9. Mediator
// Un intermediario es un design pattern que se comunica con distintos objetos a la vez...
// El mediator define objetos ya localizados para objetivos especificos

// Subastas, comprador y vendedor

// Primero Mediador requiere de diferentes objetos
function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;// Esta va a ser la de Subasta
}

// Los Vendedores tendrán dos tareas. Una es lanzar una oferta, y la otra  
// es quien es el comprador
// Función exclusivas del Vendedor
Vendedor.prototype = {
    // Puede lanzar un oferta
    oferta: (articulo, precio) => {
        console.log(`Tenemos el sgte artículo ${articulo}, iniciamos con un precio de ${precio}`);
    },
    // Definir a quien le va a vender
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

// Tenemos dos compradores humberto y rodolfo
// Ellos solo pueden ofertar
function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}
// ¿por qué this.sala=null? porque una vez que se halla creado la subasta
// se va a llenar el campo this.sala = null; en la sala de Vendedor y 
// Comprador. Donde ellos estarán en la misma sala. Esto sucede cuando la
// Subasta sea creada

// Funciones exclusivas del Comprador
Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`);
    }
}

// Estos dos Vendedor y Comprador se van a comunicar con el objeto Subasta
function Subasta() {
    // Colocando al Vendedor y Comprador en la misma Sala de subasta
    let compradores = {}; 

    return {
        registrar: usuario => {
            // Se tendrá la instancia actual de la subasta
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}




// Crear Objetos.
// Lo que hace Mediator es comunicar estos objetos al mismo tiempo
const humberto = new Comprador('Humberto');
const rodolfo = new Comprador('Rodolfo');
const vendedor = new Vendedor('Vendedor de Autos');
const subasta = new Subasta();

// Tienes que registrarlos. Subasta es el mediador(Comunica dif objetos)
subasta.registrar(humberto);
subasta.registrar(rodolfo);
subasta.registrar(vendedor);

//Utilizando Vendedor.prototype
//Utilizando función oferta
vendedor.oferta('Mustang', 300);//Vendedor lanza Oferta

// Ofertando los compradores humberto y rodolfo
humberto.oferta(350, humberto);
rodolfo.oferta(450, rodolfo);
humberto.oferta(550, humberto);
rodolfo.oferta(650, rodolfo);
// Utilizando función vendido:
vendedor.vendido('rodolfo');
```
