export default class Nodo{
    constructor(informacion){
        this._informacion = informacion;
        this._derecha = null;
        this._izquierda = null;
    }

    get derecha(){
        return this._derecha;
    }
    get informacion(){
        return this._informacion;
    }
    get izquierda(){
        return this._izquierda;
    }
    set derecha(derecha){
        this._derecha = derecha;
    }
    set dato(dato){
        this._dato = dato;
    }
    set izquierda(izquierda){
        this._izquierda = izquierda;
    }
}