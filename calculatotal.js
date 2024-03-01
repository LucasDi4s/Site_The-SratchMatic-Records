//Captura todos os clientes que fizeram encomendas
var clientes = document.querySelectorAll(".cliente");

//Passa por cada encomenda, calculando o valor total
for(var count=0; count < clientes.length; count++){

    //Captura a quantidade encomendada
    var qtde = clientes[count].querySelector(".quantidade").textContent;
    var unitario = clientes[count].querySelector(".valor-unitario").textContent;

    //Valida a quantidade
    if(qtde<1 || isNaN(qtde) ){
        //Quantidade OK, avisa o usuário
        clientes[count].querySelector(".quantidade").textContent = "QTDE INVÁLIDA!";
        clientes[count].querySelector(".quantidade").style.color="red";
     //Captura o valor unitário do produto
    }else if(unitario<1 || isNaN(unitario) ){
        //Quantidade OK, avisa o usuário
        clientes[count].querySelector(".valor-unitario").textContent = "VALOR INVÁLIDA!";
        clientes[count].style.backgroundColor="red";
    }else{
    //Calcula o valor total da encomenda
    clientes[count].querySelector(".total").textContent = calculaTotal(qtde, unitario);
    }



   


} 
//função para calcular o valor total da encomenda
function calculaTotal(qtde, unitario){
    var total = 0;
    total=qtde*unitario;

    return total;
}