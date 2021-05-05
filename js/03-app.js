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