// Seleciona todos os elementos HTML com a classe "cliente" e os armazena em uma variável.
var clientes = document.querySelectorAll(".cliente");

// Loop através de cada cliente selecionado.
for (var count = 0; count < clientes.length; count++) {

    // Obtém a quantidade de cada cliente.
    var qtdeText = clientes[count].querySelector(".quantidade").textContent;
    // Obtém o valor unitário de cada cliente.
    var unitarioText = clientes[count].querySelector(".valor-unitario").textContent;

    // Converte a quantidade para número.
    var qtde = parseFloat(qtdeText);
    // Converte o valor unitário para número.
    var unitario = parseFloat(unitarioText);

    // Verifica se a quantidade é menor que 1 ou não é um número.
    if (qtde < 1 || isNaN(qtde)) {
        // Se a quantidade for inválida, exibe "QTDE INVÁLIDA!" e altera a cor do texto para vermelho.
        clientes[count].querySelector(".quantidade").textContent = "QTDE INVÁLIDA!";
        clientes[count].querySelector(".quantidade").style.color = "red";

    } else if (unitario < 1 || isNaN(unitario)) {
        // Se o valor unitário for inválido, exibe "VALOR INVÁLIDO!" e altera a cor do texto para vermelho.
        clientes[count].querySelector(".valor-unitario").textContent = "VALOR INVÁLIDO!";
        clientes[count].querySelector(".valor-unitario").style.color = "red";
    } else {
        // Formata os valores unitários e totais como moeda brasileira (BRL).
        var valorUnitarioFormatado = real(unitario);
        var total = calculaTotal(qtde, unitario);
        var totalFormatado = real(total);
        
        // Define os valores formatados nos elementos HTML correspondentes.
        clientes[count].querySelector(".valor-unitario").textContent = valorUnitarioFormatado;
        clientes[count].querySelector(".total").textContent = totalFormatado;
    }
}

// Função que calcula o total multiplicando a quantidade pelo valor unitário.
function calculaTotal(qtde, unitario) {
    return qtde * unitario;
}

// Esta função 'real' recebe um valor numérico 'v' e tenta converter para o formato de moeda brasileira.
function real(v) {
    return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
