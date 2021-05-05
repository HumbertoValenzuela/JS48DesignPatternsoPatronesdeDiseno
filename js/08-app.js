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