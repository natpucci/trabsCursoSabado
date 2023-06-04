let elementosDigitados = document.getElementById("elementoDisplay");
let limpar = document.getElementById("clear");
let numero1 = document.getElementById("number1");
let deletar = document.getElementById("delete");
let numero2 = document.getElementById("number2");
let numero3 = document.getElementById("number3");
let numero4 = document.getElementById("number4");
let numero5 = document.getElementById("number5");
let numero6 = document.getElementById("number6");
let numero7 = document.getElementById("number7");
let numero8 = document.getElementById("number8");
let numero9 = document.getElementById("number9");
let subtrair = document.getElementById("sub");
let somar = document.getElementById("sum");
let numero0 = document.getElementById("number0");
let multiplicar = document.getElementById("multi");
let dividir = document.getElementById("divide");
let calcular = document.getElementById("result");

function mostrarNumerosDigitandos(event){
    let ultElemento = elementosDigitados.innerText[elementosDigitados.innerText.length-1];
    let elemento = event.target.innerText;

    if((elemento === ultElemento || ultElemento === '+' || ultElemento === '-' || ultElemento === '/' || ultElemento === '*') && 
    (elemento === '+'|| elemento === '-' || elemento === '/' || elemento === '*')){
    }
    else if(ultElemento==null && (elemento === '+' || elemento === '/' || elemento === '*')){
    }
    else{
        elementosDigitados.innerText += elemento;
    }
}

function limparTudo(){
    elementosDigitados.innerText = null;
}

function calcularResultado(){
    let ultElemento = elementosDigitados.innerText[elementosDigitados.innerText.length-1];
    if(ultElemento!=null){
        let resultado = eval(elementosDigitados.innerText);
        elementosDigitados.innerText = resultado;
    }    
}

function deletarUltimoElemento(){
    let elementos = elementosDigitados.innerText;
    elementos = elementos.slice(0, elementos.length - 1);
    elementosDigitados.innerText = elementos;
}

numero1.addEventListener("click",mostrarNumerosDigitandos);
numero2.addEventListener("click",mostrarNumerosDigitandos);
numero3.addEventListener("click",mostrarNumerosDigitandos);
numero4.addEventListener("click",mostrarNumerosDigitandos);
numero5.addEventListener("click",mostrarNumerosDigitandos);
numero6.addEventListener("click",mostrarNumerosDigitandos);
numero7.addEventListener("click",mostrarNumerosDigitandos);
numero8.addEventListener("click",mostrarNumerosDigitandos);
numero9.addEventListener("click",mostrarNumerosDigitandos);
numero0.addEventListener("click",mostrarNumerosDigitandos);
somar.addEventListener("click",mostrarNumerosDigitandos);
dividir.addEventListener("click",mostrarNumerosDigitandos);
subtrair.addEventListener("click",mostrarNumerosDigitandos);
limpar.addEventListener("click",limparTudo);
calcular.addEventListener("click",calcularResultado);
multiplicar.addEventListener("click",mostrarNumerosDigitandos);
deletar.addEventListener("click",deletarUltimoElemento);

