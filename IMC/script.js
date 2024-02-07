
function calcularIMC(){
    const leia = require("prompt-sync")()
    let peso = leia("Digite seu peso:");
    let altura = leia("Digite sua altura:")
    let IMC = peso/(altura * altura)

    console.log("Seu imc é:" + IMC)

    if(IMC < 18.5){
        console.log("Você está abaixo do peso!")
    }
    else if(IMC == 18.5 && IMC < 24.99){
        console.log("Parabens! Você está saudável!!")
    }
    else if(IMC == 25 && IMC < 24.99){
        console.log("Você está acima do peso!")
    }
    else if(IMC > 30){
        console.log("Você possui obesidade!")
    }
    else{
        console.log("Insere os dados direito marmota")
    }
}
calcularIMC()
