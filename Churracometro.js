//Utilizamos essas 4 linhas para conseguirmos linkar com os arquivos HTML
let inputadultos = document.getElementById("adultos");
let inputcriancas = document.getElementById("criancas");
let inputduracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

//Criamos a função CALCULAR para efetuarmos toda a conta necessaria para que ele nos informe a quantidade certa de Carne/Bebida/Cerveja
//Conforme o numero de Adultos, Crianças e Duração. O CSS e HTML nao consegue realizar toda essa conta
function calcular() {
    console.log("Calculando...")

    //usamnos essas 3 linhas para atribuir os valores inseridos nos campos no HTML (Adultos, Crianças e Duração)
    //Assim criamos uma variavel para que esse valor seja atribuido
    let adultos = inputadultos.value;
    let criancas = inputcriancas.value;
    let duracao = inputduracao.value;

    //Aqui criamos as 3 variaveis para efetuarem as contas necessarias para cada tipo de pessoa e duraçao do churrasco
    let QuantTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let QuantTotalCerveja = cervejaPP(duracao) * adultos;
    let QuantTotalbebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);

    //Apos ele calcular, essas 3 linhas servem para que um link seja feito com a pagina HTML, mostrando os resultados e expandindo o campo
    // do churrascometro
    resultado.innerHTML = `<p>${QuantTotalCarne / 1000} kg de carne</p>`
    // nao esquecer de colocar o + antes do = para que o programa nao substitua a linha anterior
    resultado.innerHTML += `<p>${Math.ceil(QuantTotalCerveja / 355)} Latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(QuantTotalbebidas / 2000)} Garrafas de bebidas</p>`
    
    console.log(QuantTotalCarne);
    console.log(QuantTotalCerveja);
    console.log(QuantTotalbebidas);
}

//Nessas 3 funções usamos caso a Duração do churrasco seja maior que 6 horas, assim a quantidade ira aumentar
function carnePP(duracao){
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao){
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao){
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}