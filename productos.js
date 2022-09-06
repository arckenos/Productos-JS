import { Producto } from "./producto.js";
export var lista = [];

export function aniadirProducto(producto){
    if(producto === undefined || !producto instanceof Producto) throw new ("Producto no valido");
    if(this.getProductoPorCodigo(codigo) !== null) throw new ("Clave Repetida");
    lista.push(producto);
}

export function getProductoPorCodigo(codigo){
    lista.forEach(producto => {
        if(producto.codigo == codigo){
            return producto;
        }
    });
    return null;
}

export function getProductoPorNombre(nombre){
    lista.forEach(producto => {
        if(producto.nombre == nombre){
            return producto;
        }
    });
    return null;
}

export function eliminarProducto(codigo){
    for(let i = 0; i < lista.size; i++){
        if(this._lista[i].codigo == codigo){
            lista.splice(i, 1);
        } 
    }
}

export function indexOf(codigo){
    for(let i = 0; i < lista.size; i++){
        if(this._lista[i].codigo == codigo){
            return i;
        } 
    }
}

export function actualizarProducto(codigo, producto){
    let i = indexOf(codigo);
    lista[i] = producto;
}