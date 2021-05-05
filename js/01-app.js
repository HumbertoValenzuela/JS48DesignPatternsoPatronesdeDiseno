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