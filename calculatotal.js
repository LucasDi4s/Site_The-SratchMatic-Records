// Seleciona todos os elementos HTML com a classe "cliente" e os armazena em uma variável.
var clientes = document.querySelectorAll(".cliente");

// Loop através de cada cliente selecionado.
for(var count=0; count < clientes.length; count++){

    // Obtém a quantidade de cada cliente.
    var qtde = clientes[count].querySelector(".quantidade").textContent;
    // Obtém o valor unitário de cada cliente.
    var unitario = clientes[count].querySelector(".valor-unitario").textContent;



    // Verifica se a quantidade é menor que 1 ou não é um número.
    if(qtde<1 || isNaN(qtde) ){
        // Se a quantidade for inválida, exibe "QTDE INVÁLIDA!" e altera a cor do texto para vermelho.
        clientes[count].querySelector(".quantidade").textContent = "QTDE INVÁLIDA!";
        clientes[count].querySelector(".quantidade").style.color="red";
    
    } else if(unitario<1 || isNaN(unitario) ){
        clientes[count].querySelector(".valor-unitario").textContent = "VALOR INVÁLIDO!";
        clientes[count].style.backgroundColor="red";
    } else {

        // Se tanto a quantidade quanto o valor unitário forem válidos, chama a função calculaTotal e exibe o resultado na seção "total".
        clientes[count].querySelector(".total").textContent = real(calculaTotal(qtde, unitario));

} 

// Função que calcula o total multiplicando a quantidade pelo valor unitário.
function calculaTotal(qtde, unitario){
    var total = 0;
    total = qtde * unitario;
    return total;
}


// Esta função 'real' recebe um valor numérico 'v' e tenta converter para o formato de moeda brasileira.
    function real(v){
        let convReal = parseFloat(v); // Converte 'v' para um número de ponto flutuante e armazena em 'convReal'
        convReal = v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // Formata 'convReal' como moeda brasileira
        return convReal; // Retorna o valor formatado como moeda brasileira
 }
    
}
