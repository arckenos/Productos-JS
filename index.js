import { question } from "readline-sync";
import { Producto } from "./producto.js";
import {lista} from "./productos.js";
import { aniadirProducto } from "./productos.js";



function desplegarMenu(){

    let opcion = question("Introduzca su opcion: ");
    switch(opcion){
        case "1":
            registrarProducto();
            break;
        case 10:
            console.log("Saliendo del sistema...");
            return;

        default:
            console.log("Opcion no valida")
    }
    desplegarMenu();
}



function registrarProducto(){
    let codigo = question("Introduzca el codigo (6 digitos):");
    let nombre = question("Introduzca el nombre:");
    let precio = question("Introduzca el precio:");
    let stock = question("Introduzca el numero de stock:");
    let ultimaFechaSurtida = question("Introduzca el codigo (DD/MM/AAAA):");
    let producto = new Producto(codigo,question,nombre,precio,stock,ultimaFechaSurtida);
    listaProductos.aniadirProducto(producto);

}



desplegarMenu();
