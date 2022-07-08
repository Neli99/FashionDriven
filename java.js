pegarencomendas();
//MINHAS VARIAVEIS GLOBAIS
let username = prompt("Qual o seu nome?");
let itemSelected;
let conteudo = [];
let userLink;
let modelo = ["t-shirt","long","top-tank"];
let gola = ["v-neck","round","polo"];
let tecido = ["silk","cotton","polyester"];

let x;
let y;
let z;
let objetoUsuario;
//FIM DA VARIÁVEIS GLOBAIS
setInterval(inputValue, 1000);
function inputValue(){
    let input = document.querySelector("input");
    userLink = input.value;  
    verification()  
}
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
    let modeloDom = document.querySelector(".model .borderBlue");   
    let golaDom = document.querySelector(".collar .borderBlue");  
    let tecidoDom = document.querySelector(".tissue .borderBlue");
    let confirmacao = document.querySelector(".confirm");       
    let condicao2 = (userLink == '');
    let condicao1 = (modeloDom != null)&&(golaDom != null)&&(tecidoDom != null);
    if(condicao1 && !condicao2){
        confirmacao.classList.add("buttonBlue");
    }       
}
function sendRequest(){
    let verificarBotao = document.querySelector(".buttonBlue");
    informacoesRoupa();
    if(verificarBotao != null){
        const requisicao = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', objetoUsuario);
        requisicao.then(tratarSucesso);
        requisicao.catch(tratarError);
    } 
   }
function informacoesRoupa(){
    //já temos os nome de usuario e o link, falta as informaçoes da camiseta
    let variavel1 = document.querySelector(".model");
    let filhos1 = variavel1.querySelectorAll(".division2");
    let variavel2 = document.querySelector(".collar");
    let filhos2 = variavel2.querySelectorAll(".division2");
    let variavel3 = document.querySelector(".tissue");
    let filhos3 = variavel3.querySelectorAll(".division2");
    for(let i=0;i<filhos1.length;i++){
        let verificando = filhos1[i].querySelector(".borderBlue");
        if(verificando !== null){
            x=i;
        }        
    } 
    for(let j=0;j<filhos2.length;j++){
        let verificando = filhos2[j].querySelector(".borderBlue");
        if(verificando !== null){
            y=j;
        }        
    } 
    for(let k=0;k<filhos3.length;k++){
        let verificando = filhos3[k].querySelector(".borderBlue");
        if(verificando !== null){
            z=k;
        }        
    }
    objetoUsuario = {
    "model": modelo[x],
	"neck": gola[y],
	"material": tecido[z],
	"image": userLink,
	"owner": username,
	"author": username
    }
}
function tratarSucesso(){
    alert("Sua encomenda foi solicitada!");
}
function tratarError(){
    alert("Ops, não conseguimos processar sua encomenda");
}
function pegarencomendas(){
    let encomendas = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");
    encomendas.then((resposta)=>{
        renderizarUltimasEncomendas(resposta.data);
    })
}
function renderizarUltimasEncomendas(encomendas){
    let ultimosPedidos = document.querySelector(".ultimosPedidos");   
    console.log(ultimosPedidos); 
    encomendas.map((encomenda)=>{
        ultimosPedidos.innerHTML += `<div onclick="selecionarItem('${encomenda.owner}','${encomenda.image}','${encomenda.model}','${encomenda.neck}','${encomenda.material}')" class="item">
        <img src=${encomenda.image}>
        <div class="textOrders"><div class="weight">Criador:</div>${encomenda.owner}</div>
    </div>` ;     
    })
}
function selecionarItem(dono,link,modelo,gola, material){
    let respostaDoUsuario = confirm("Você tem certeza que deseja escolhar essa blusa?");
    if(respostaDoUsuario === true){
        let encomendaClicada = {
            model: modelo,
            neck: gola,
            material: material,
            image: link,
            owner: dono,
            author: username
        }
        const requisicao = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', encomendaClicada);
        requisicao.then(tratarSucesso);
        requisicao.catch(tratarError);
    }    
    
}