import { question } from "readline-sync";
import { Producto } from "./producto.js";
import { registrar, consultar, consultarPorCodigo, consultarPorNombre, actualizar, eliminar } from "./productoDAO.js";



function desplegarMenu(){

    let opcion = question("Introduzca su opcion: ");
    switch(opcion){
        case "1":
            console.log("--RegistrarProducto--");
            registrarProducto();
            break;
        case "2":
            console.log("--Consultar Lista de Productos--");
            consultarProductos();
            break;
        case "3":
            console.log("--Buscar Producto por Codigo--");
            buscarProductoCodigo();
            break;
        case "4":
            console.log("--Buscar Producto Por Nombre--");
            buscarProductoNombre();
            break;
        case "5":
            console.log("--Actualizar Producto--");
            actualizarProducto();
            break;
        case "6":
            console.log("--Eliminar Producto--");
            eliminarProducto();
            break;
        case "10":
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
    try{
        let producto = new Producto(codigo,nombre,precio,stock,ultimaFechaSurtida);
        registrar(producto);
    }catch(err){
        console.log("Error: "+err)
    }

}


function consultarProductos(){
    console.log("\n\nLista de productos")
    let lista = consultar();
    lista.forEach(producto =>{
        desplegarProducto(producto);
    });
}

function buscarProductoCodigo(){
    let codigo = question("Introduzca el codigo del producto: ")
    let producto  = consultarPorCodigo(codigo);
    if(producto)
        console.log(producto);
    else
        console.log("Producto no encontrado");
}

function buscarProductoNombre(){
    let nombre = question("Introduzca el nombre del producto: ")
    let producto  = consultarPorNombre(nombre);
    if(producto)
        console.log(producto);
    else
        console.log("Producto no encontrado");
}

function actualizarProducto(){
    let codigo = question("Introduzca el codigo:");
    let nombre = question("Introduzca el nombre:");
    let precio = question("Introduzca el precio:");
    let stock = question("Introduzca el numero de stock:");
    let ultimaFechaSurtida = question("Introduzca el codigo (DD/MM/AAAA):");
    
    try{
        let producto = new Producto(codigo,nombre,precio,stock,ultimaFechaSurtida);
        actualizar(producto);
        console.log("Actualizar Producto");
    }catch(err){
        console.log("Error: "+err)
    }
}

function eliminarProducto(){
    let codigo = question("Introduzca el codigo:");
    try{
        eliminar(codigo);
        console.log("Producto eliminado");
    }catch(err){
        console.log(err);
    }

}

function desplegarProducto(producto){
    console.log(producto.codigo+" "+producto.nombre+" "+producto.precio+" "+producto.stock+" "+producto.ultimaFechaSurtida);

}

desplegarMenu();
