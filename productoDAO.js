import { Producto } from "./producto.js";
export var lista = [];

export function registrar(producto){
    if(producto === undefined || !producto instanceof Producto) throw new ("Producto no valido");
    if(consultarPorCodigo(producto.codigo)) throw new ("Clave Repetida");
    lista.push(producto);
}

export function consultarPorCodigo(codigo){
    let buscado;
    lista.forEach(producto => {
        if(producto.codigo == codigo){
            console.log(typeof producto.codigo + " aa  "+ typeof codigo)
            buscado = producto;
        }
    });
    return buscado;
}

export function consultarPorNombre(nombre){
    let buscado;
    lista.forEach(producto => {
        if(producto.nombre == nombre){
            buscado = producto;
        }
    });
    return buscado;
}

export function eliminar(codigo){
    let index = indexOfCodigo(codigo);
    if(index){
        lista.splice(index,1);
    }else{
        throw Error("Producto no encontrado");
    }
 
}

function indexOfCodigo(codigo){
    let index = -1;
    for(let i = 0; i < lista.size; i++){
        if(lista[i].codigo == codigo){
            index = i;
        } 
    }
    return index;
}

export function actualizar(producto){
    let i = indexOfCodigo(producto.codigo);
    if(i != -1)
        lista[i] = producto;
    else{
        throw Error("Producto no encontrado");
    }
}

export function consultar(){
    return lista;
}