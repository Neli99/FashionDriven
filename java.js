//MINHAS VARIAVEIS GLOBAIS
//let username = prompt("Qual o seu nome?");
let userLink;
let itemSelected;
//FIM DA VARIÁVEIS GLOBAIS

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
}
//Fim da função que seleciona

function verification(){
    //Essa funçao checa se os itens estão selecionados e se a funçao input não esta vazia
    // se as condiçoes forem verdadeiras, ele deixa o botao de confirmação azul;    
}

//Armazenando link do usuario
function link(){
    //usar um if e verificar se não está vazia
    let input = document.querySelector("input");
    userLink = input.value;
    if(userLink == null){
        alert("Você deve inserir um link!");
        link();
    }
}
//Fim


