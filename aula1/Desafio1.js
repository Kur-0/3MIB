const leia = require('prompt-sync')();


function pegaDados(){
    let qntdLivros = leia("Quantos livros você está levando? ")
    return qntdLivros;
}

function calcularPreco(qntdLivros){

    if (qntdLivros >= 7) {
        valor = qntdLivros*15
        return valor;
    }
    else if(qntdLivros < 7){
        valor = qntdLivros*22
        return valor;
    }
}

function main(){
    let qntdLivros = pegaDados(); // Atribui o valor retornado por pegaDados a qntdLivros
    let valor = calcularPreco(qntdLivros);

    if (valor === 0){
        console.log("Voce não está levando nada")
        
    }
    else if (valor > 0){
        console.log(`O total da sua conta é: R$ ${valor.toFixed(2)}`)
    }
    else {
        console.log("Digita direito burro")
        
    }
}

main()