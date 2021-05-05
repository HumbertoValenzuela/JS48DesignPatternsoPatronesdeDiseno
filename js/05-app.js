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
