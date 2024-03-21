function adicionarNaTabela() {
    // Obtenha os valores do formulário
    var nome = document.getElementById("nome").value;
    var produto = document.getElementById("discos").value;
    var quantidade = parseInt(document.getElementById("Qtde").value);
    var unitario = parseFloat(document.getElementById("unitario").value);

    // Verifique se os valores foram fornecidos corretamente
    if (nome === "" || quantidade <= 0 || isNaN(quantidade) || unitario <= 0 || isNaN(unitario)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return; // Pare a execução se os valores não forem válidos
    }

    // Calcula o total
    var total = calculaTotal(quantidade, unitario);

    // Formata os valores unitários e totais como moeda brasileira (BRL)
    unitario = real(unitario);
    total = real(total);

    // Crie uma nova linha na tabela
    var tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow();
    
    // Insira as células na nova linha
    var celulaNome = novaLinha.insertCell(0);
    var celulaProduto = novaLinha.insertCell(1);
    var celulaQuantidade = novaLinha.insertCell(2);
    var celulaUnitario = novaLinha.insertCell(3);
    var celulaTotal = novaLinha.insertCell(4);

    // Adicione os valores do formulário às células da nova linha
    celulaNome.textContent = nome;
    celulaProduto.textContent = produto;
    celulaQuantidade.textContent = quantidade;
    celulaUnitario.textContent = unitario;
    celulaTotal.textContent = total;

    // Chame a função para formatar a tabela após adicionar os dados
    formatarTabela();
}

// Função para formatar apenas a linha recém-adicionada na tabela
function formatarNovaLinha() {
    // Seleciona a última linha da tabela, que é a linha recém-adicionada
    var novaLinha = document.getElementById("tabela").rows.length - 1;
    var linha = document.getElementById("tabela").rows[novaLinha];

    // Obtém a quantidade da nova linha.
    var qtdeText = linha.querySelector(".quantidade").textContent;
    // Obtém o valor unitário da nova linha.
    var unitarioText = linha.querySelector(".valor-unitario").textContent;

    // Converte a quantidade para número.
    var qtde = parseFloat(qtdeText);
    // Converte o valor unitário para número.
    var unitario = parseFloat(unitarioText);

    // Verifica se a quantidade é menor que 1 ou não é um número.
    if (qtde < 1 || isNaN(qtde)) {
        // Se a quantidade for inválida, exibe "QTDE INVÁLIDA!" e altera a cor do texto para vermelho.
        linha.querySelector(".quantidade").textContent = "QTDE INVÁLIDA!";
        linha.querySelector(".quantidade").style.color = "red";

    } else if (unitario < 1 || isNaN(unitario)) {
        // Se o valor unitário for inválido, exibe "VALOR INVÁLIDO!" e altera a cor do texto para vermelho.
        linha.querySelector(".valor-unitario").textContent = "VALOR INVÁLIDO!";
        linha.querySelector(".valor-unitario").style.color = "red";
    } else {
        // Formata os valores unitários e totais como moeda brasileira (BRL).
        var valorUnitarioFormatado = real(unitario);
        var total = calculaTotal(qtde, unitario);
        var totalFormatado = real(total);
        
        // Define os valores formatados nos elementos HTML correspondentes.
        linha.querySelector(".valor-unitario").textContent = valorUnitarioFormatado;
        linha.querySelector(".total").textContent = totalFormatado;
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

// Chame a função para formatar a tabela quando a página carregar inicialmente
formatarTabela();
