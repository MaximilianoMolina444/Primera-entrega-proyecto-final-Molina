class prendas {
    constructor(nombre, talle, color, precio) {
        this.nombre = nombre;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
    }
    mostrarProducto() {
        document.write(`Este pack incluye los siguientes productos:` + `<br>`)
        document.write(`Producto: ` + this.nombre + `<br>`);
        document.write(`Talles: ` + this.talle + `<br>`);
        document.write(`Colores: ` + this.color + `<br>`);
        document.write(`Precio: $` + this.precio + `<br>`);
    }
    alerta() {
        alert(`Pack de ${this.nombre}\n incluye\n 5 ${this.nombre}\n Talles: ${this.talle}\n Colores: ${this.color}\n Su precio es de: $${this.precio} `)
    }
}

const pack1 = new prendas(`remeras`, `S-XL`, `rojo-negro-blanco`, 2500);
const pack2 = new prendas(`camisas`, `S-XL`, `diversas estampas`, 3500);
const pack3 = new prendas(`pantalones`, `40-58`, `azul-negro-gris`, 5000);
const pack4 = new prendas(`camperas`, `S-XXL`, `consultar motivos`, 8000);



let total = 0;
let precio = 0;
let cantidad = 0;
function pedirNombre() {
    let nombre = prompt("ingresa tu nombre");
    while (nombre === "" || !isNaN(nombre)) {
        nombre = prompt("ingresa tu nombre");
    }
    alert("Bienvenid@: " + nombre);
    return nombre;
}

function elegirProducto() {
    let prenda = "";
    do {
        prenda = prompt("¿Que pack desea llevar?\n ingrese el numero correspondiente al producto\n (1)pantalones:\n (2)remeras\n (3)camisas:\n (4)camperas:\n ");
        switch (prenda.toLowerCase()) {
            case "1":
                precio = 5000;
                break;
            case "2":
                precio = 2500;
                break;
            case "3":
                precio = 3500;
                break;
            case "4":
                precio = 8000;
                break;
            default:
                prenda = "C"
                alert("No ingreso un producto valido");
                break;
        }
    } while (prenda == "")

}

function pedirCantidad() {
    cantidad = parseInt(prompt("ingrese la cantidad de packs que sea comprar"));
    while (isNaN(cantidad)) {
        cantidad = parseInt(prompt("ingrese la cantidad de packs que sea comprar"));
    }
    total += total + cantidad * precio;
}

pedirNombre();
alert(`Nuestros packs de productos son los siguientes: `)
pack1.alerta();
pack2.alerta();
pack3.alerta();
pack4.alerta();
const arrayLista = [];
arrayLista.push(pack1.nombre);
arrayLista.push(pack2.nombre);
arrayLista.push(pack3.nombre);
arrayLista.push(pack4.nombre);
console.log(arrayLista);

for (let i = 0; i < arrayLista.length; i++) {
    document.write(`Tenemos packs de ` + arrayLista[i] +`<br>`);
}

do {
    elegirProducto();
    pedirCantidad();
    var respuesta = prompt("te gustaria agregar algun otro producto? ingresa: s para si o n para no");
    respuesta = respuesta.toLowerCase()
} while (respuesta == "s")

alert("el precio total es: $" + total);
alert("Gracias por su compra, en breve nos estaremos comunicando para la entrega")


arrayLista.forEach((find)=>{
    console.log(find)
})


const buscador = arrayLista.find(producto => producto == `remeras`)
document.write(`Tenemos stock de: ` + buscador + `<br>`);

const filtro = arrayLista.filter(elemento => elemento == `camperas`)
document.write(`Si hay ${filtro} en el deposito`)
