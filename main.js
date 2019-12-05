import Expresion from './Expresion.js';
import Nodo from './nodo.js';
class Main{
    constructor(){
        let view = new Expresion(document.querySelector('#postorder'), document.querySelector('#preorder')); document.querySelector('#calcular').addEventListener('click', () => {

                let valores = new Array();
                let expresion = document.querySelector('#expresion').value;
                let resultado = document.querySelector('#resultado')
                console.log(expresion);
                
                for(let i=0;i<expresion.length;i++){
                    if(operacion[i]!='+' && expresion[i]!='-'&& expresion[i]!='/'&& expresion[i]!='*'){
                        valores[i] = parseFloat(expresion[i])
                    }else{
                        valores[i] = expresion[i];
                    }
                }
                for(let i=0;i<valores.length;i++){
                    
                    let nodo = new Nodo(valores[i]);
                    view.agregarNodo(nodo);
                }
                view.crearArbol();
                view.preOrder();
                view.posOrder();
        })
    }
}
let main = new Main();