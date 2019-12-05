export default class Expresion{
    constructor(postOrder, preOrder){
        this._postOrder = postOrder;
        this._preOrder = preOrder;
        this._nodo = new Array();
        this._Pila = new Array();

    }
    agregarNodo(nodo){
        this._nodo.push(nodo);
        console.log(this._nodo);
    }

    preOrder(){
        this._preOrder(this._nodo[this._nodo.length-1]);
    }
    
    _preOrder(valor){
        this._Pila.push(valor);
        if(valor.izquierda!=null){
            this._preOrder(valor.izquierda)
        }else if(valor.derecha != null){
            this._preOrder(valor.derecha)
        }
    }
   
    postOrder(){
        this._postOrder(this._nodo[this._nodo.length-1]);
        console.log(this._nodo[this._nodo.length-1]);
        
    }
    _postOrder(valor){
        if(valor.izquierda!=null){
            this._postOrder(valor.izquierda)
        }else if(valor.derecha != null){
            this._postOrder(valor.derecha)
        }
    }
    _removeItemFromArr( arr, item ){
        var i = arr.indexOf( item );
     
        if ( i !== -1 ) {
            arr.splice( i, 1 );
        }
    }
   
    arbol(){
        for(let i=0; i<this._nodo.length; i++){
            console.log(this._nodo);
            
            if(this._nodo[i].valor === "/" || this._nodo[i].valor === "*"){
                this._nodo[i].izquierda = this._nodo[i-1];
                this._nodo[i].derecha = this._nodo[i+1];
                console.log(this._nodo);
                this._removeItemFromArr(this._nodo, this._nodo[i+1])
                this._removeItemFromArr(this._nodo, this._nodo[i-1])
                
            }
            
        }
        for(let i=0; i<this._nodo.length; i++){
            console.log(this._nodo);
            if(this._nodo[i].valor === "+" || this._nodo[i].valor === "-"){
                this._nodo[i].izquierda = this._nodo[i-1];
                this._nodo[i].derecha = this._nodo[i+1];
                this._removeItemFromArr(this._nodo, this._nodo[i+1])
                this._removeItemFromArr(this._nodo, this._nodo[i-1])
                i--;
                
            }
        }
    }
}