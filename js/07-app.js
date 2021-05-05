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