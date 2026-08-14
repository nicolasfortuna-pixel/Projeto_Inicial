import { somar } from "./calculadora.js";
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const btnSomar = document.getElementById("btnSomar");
const resultado = document.getElementById("resultado");

btnSomar.addEventListener("click", function () {
    const valorUm = Number(numero1.value);
    const valorDois = Number(numero2.value);

    const textoresultado = `O resultado é: ${somar (valorUm, valorDois)}`

    resultado.innerHTML = textoresultado;
});
