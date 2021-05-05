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