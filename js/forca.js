let tentativas = 6;
let listaDinamica = [];
let palavraSecretaDica;
let palavraSecretaSorteada;



const palavras = [
    palavra001={
        nome : "INGLATERRA",
        dica : "LUGARES"
    },
    palavra002={
        nome : "PARAIBA",
        dica : "LUGARES"
    },
    palavra003={
        nome : "MALDIVAS",
        dica : "LUGARES"
    },
    palavra004={
        nome : "BAHIA",
        dica : "LUGARES"
    },
    palavra005={
        nome : "ISRAEL",
        dica : "LUGARES"
    },
    palavra006={
        nome : "EQUADOR",
        dica : "LUGARES"
    },
    palavra007={
        nome : "BULGARIA",
        dica : "LUGARES"
    },
    palavra008={
        nome : "ALEMANHA",
        dica : "LUGARES"
    },
    palavra009={
        nome : "ARGENTINA",
        dica : "LUGARES"
    },
    palavra010={
        nome : "MARROCOS",
        dica : "LUGARES"
    },
    palavra011={
        nome : "BICICLETA",
        dica : "TRANSPORTE"
    },palavra012={
        nome : "MOTOCICLETA",
        dica : "TRANSPORTE"
    },palavra013={
        nome : "LANCHA",
        dica : "TRANSPORTE"
    },palavra014={
        nome : "PATINETE",
        dica : "TRANSPORTE"
    },palavra015={
        nome : "NAVIO",
        dica : "TRANSPORTE"
    },palavra016={
        nome : "AVIAO",
        dica : "TRANSPORTE"
    },palavra017={
        nome : "BARCO",
        dica : "TRANSPORTE"
    },palavra018={
        nome : "FOGUETE",
        dica : "TRANSPORTE"
    },palavra019={
        nome : "METRO",
        dica : "TRANSPORTE"
    },palavra020={
        nome : "CARRO",
        dica : "TRANSPORTE"
    },
    palavra021={
        nome : "CANETA",
        dica : "OBJETO"
    },
    palavra022={
        nome : "CELULAR",
        dica : "OBJETO"
    },palavra023={
        nome : "RELOGIO",
        dica : "OBJETO"
    },palavra024={
        nome : "CHAVE",
        dica : "OBJETO"
    },palavra025={
        nome : "BORRACHA",
        dica : "OBJETO"
    },palavra026={
        nome : "VENTILADOR",
        dica : "OBJETO"
    },palavra027={
        nome : "FONES",
        dica : "OBJETO"
    },palavra028={
        nome : "COLHER",
        dica : "OBJETO"
    },palavra029={
        nome : "MARTELO",
        dica : "OBJETO"
    },palavra030={
        nome : "ALICATE",
        dica : "OBJETO"
    },palavra031={
        nome : "GARRAFA",
        dica : "OBJETO"
    },
];

criarPalavraSecreta ()
function criarPalavraSecreta (){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaDica = palavras[indexPalavra].dica;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaDica)
}

montarPalavraNaTela()
function montarPalavraNaTela (){
    const dica = document.getElementById("dica");
    dica.innerHTML = palavraSecretaDica;

    const palavraTela = document.getElementById("palavra-chave");
    palavraTela.innerHTML = "";

    for( i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    } 
}

function verificaLetraEscolhida (letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) 
    {
        mudarStyleLetra ("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    } 

}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#C71585";
    
    document.getElementById(tecla).style.color = "#ffffff";
}


function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas --
        carregaImagemForca();
        if(tentativas == 0)
        {
            abreModal("OPS!", "Não foi dessa vez... a palavra secreta era <br>" + palavraSecretaSorteada);
        }

    }
    else {
        for (i = 0; i < palavraSecretaSorteada.length; i ++)
        {
            if (palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
            
        }
    }

    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i ++)
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    if (vitoria == true){
        abreModal("Parabéns!", "Você venceu...");
        tentativas = 0;
        
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
                document.getElementById("img").style.background = "url('./img/forca01.png')";
                break;
        case 4:
                document.getElementById("img").style.background = "url('./img/forca02.png')";
                break;
        case 3:
                document.getElementById("img").style.background = "url('./img/forca03.png')";
                break;
        case 2:
                document.getElementById("img").style.background = "url('./img/forca04.png')";
                break;
        case 1:
                document.getElementById("img").style.background = "url('./img/forca05.png')";
                break;
        case 0:
                document.getElementById("img").style.background = "url('./img/forca06.png')";
                break;
        default:
                document.getElementById("img").style.background = "url('./img/forca.png')";
                break;
    }
}

function abreModal (titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#btnReiniciar");
btnReiniciar.addEventListener("click", function(){
    location.reload();
})