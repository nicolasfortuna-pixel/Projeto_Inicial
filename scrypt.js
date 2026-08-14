const botao = document.getElementById("btnSomar");

botao.addEventListener("click", () => {
    const nmeroUm = parseFloat(document.getElementById("numeroUm").value);
    const nmeroDois = parseFloat(document.getElementById("numeroDois").value);

    const resultado = nmeroUm + nmeroDois;
    document.getElementById("resultado").innerHTML =
    `O resultado é: ${resultado}`;

}); 