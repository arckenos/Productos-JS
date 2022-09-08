


export class Producto{

    constructor(codigo, nombre, precio, stock, ultimaFechaSurtida){

        if(codigo === undefined || typeof codigo !== "string" || codigo.length != 6) throw Error("Codigo Invalido");
        this._codigo = codigo;

        
        if(nombre === undefined || typeof nombre !== "string" || nombre.length > 100) throw Error("Nombre Invalido");
        this._nombre = nombre;

        if(precio === undefined || Number(precio) === precio)  throw Error("Precio Invalido");
        this._precio = precio;

        if(stock === undefined || !Number(stock) === stock || stock % 1 !== 0 ) throw Error("Stock invalido"); 
        this._stock = stock;
        
        if(ultimaFechaSurtida === undefined || !ultimaFechaSurtida instanceof Date) throw Error("Fecha Invalida");
        this._ultimaFechaSurtida = ultimaFechaSurtida;

    }

    get codigo(){ return this._codigo; }
    set codigo(codigo){
        if(codigo === undefined || typeof codigo !== "string" || codigo.length != 6) throw Error("Codigo Invalido");
        this._codigo = codigo;
    }

    get nombre(){ return this._nombre; }
    set nombre(nombre){
        if(nombre === undefined || typeof nombre !== "string" || nombre.length <= 100) throw Error("Nombre Invalido");
        this._nombre = nombre;
    }

    get precio(){ return this._precio; }
    set precio(precio){
        if(precio === undefined || (Number(precio) === precio && precio % 1 !== 0) ) throw Error("Precio Invalido");
        this._precio = precio;
    }

    get stock(){ return this._stock; }
    set stock(stock){
        if(stock === undefined || (Number(n) === n && n % 1 === 0) ) throw Error("Stock invalido"); 
        this._stock = stock;
    }

    get ultimaFechaSurtida(){ return this._ultimaFechaSurtida; }
    set ultimaFechaSurtida(ultimaFechaSurtida){
        if(ultimaFechaSurtida === undefined || !ultimaFechaSurtida instanceof Date) throw Error("Fecha Invalida");
        this._ultimaFechaSurtida = new Date(ultimaFechaSurtida);
    }
    

}