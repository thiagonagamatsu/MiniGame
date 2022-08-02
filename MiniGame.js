let acertos = 0;
let erros = 0;
let vitoria = false;

while (acertos < 3 && erros < 3){
    const num1 = Math.floor(Math.random()*10);
    const num2 = Math.floor(Math.random()*10);
    const resultado = num1 + num2;

    console.log("Some os números:", num1, num2);
    const resposta = parseFloat(prompt("Quanto da", num1, "+", num2));

    if (resposta === resultado){
        console.log("Resposta correta!");
        acertos = acertos + 1;
    } else {
        console.log("Resposta errada!");
        erros = erros + 1;
    }
    console.log("Você tem", acertos, "acertos.");
    console.log("Você tem", erros, "erros.");

}

if (acertos === 3){
    console.log("Você venceu!");
} else {
    console.log("Você perdeu!");
}