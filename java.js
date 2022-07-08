//MINHAS VARIAVEIS GLOBAIS
//let username = prompt("Qual o seu nome?");
let userLink;
let itemSelected;
let conteudo = [];
//FIM DA VARIÁVEIS GLOBAIS
setInterval(inputValue, 1000);
//Função que seleciona
function selecection(itemSelected){ 
    let variavel = itemSelected.querySelector(".backgroundGrey");   
    let pai = itemSelected.parentNode;
    let filhos = pai.querySelectorAll(".borderBlue");
    for(let i=0;i<filhos.length;i++){
        if(filhos[i] != null){
            filhos[i].classList.remove("borderBlue");
        }
    }
    variavel.classList.add("borderBlue");
    //verification();
}
//Fim da função que seleciona

function verification(){
    //Essa funçao checa se os itens estão selecionados e se a funçao input não esta vazia
    // se as condiçoes forem verdadeiras, ele deixa o botao de confirmação azul; 
    let modelo = document.querySelector(".model .borderBlue");   
    let gola = document.querySelector(".collar .borderBlue");  
    let tecido = document.querySelector(".tissue .borderBlue");
    let confirmacao = document.querySelector(".confirm");    
    let condicao2 = (userLink == '');
    let condicao1 = (modelo != null)&&(gola != null)&&(tecido != null);
    if(condicao1 && !condicao2){
        confirmacao.classList.add("buttonBlue");
    }       
}
function inputValue(){
    let input = document.querySelector("input");
    userLink = input.value;  
    verification()  
}
function sendRequest(){
    alert("Sua encomenda foi realizada com sucesso!");
}