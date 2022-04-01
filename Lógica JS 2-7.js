let this_name = prompt('Qual o seu nome?');
let this_age = prompt('Quantos anos você tem?');
let programming_lng = prompt('Qual linguagem de programação você está estudando?');

console.log(`Olá ${this_name}, você tem ${this_age} anos e já está aprendendo ${programming_lng}!`);

let flag = false;
while (flag == false) {
    let question = prompt('Você gosta de estudar ${programming_lng}? Responda com o número 1 para SIM ou 2 para NÃO');
    if (question == "1") {
        console.log("Muito bom! Continue estudando e você terá muito sucesso");
        flag = true;
    } else if (question == "2") {
        console.log("Ahh que pena... Já tentou aprender outras linguagens?");
        flag = true;
    } else {
        console.log('Digite uma opção válida')
    }
}
