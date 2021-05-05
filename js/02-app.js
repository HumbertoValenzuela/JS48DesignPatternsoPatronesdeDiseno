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

