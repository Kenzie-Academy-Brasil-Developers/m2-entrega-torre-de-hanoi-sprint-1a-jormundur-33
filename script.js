//1-Variavel de movimento, com clique no local atual e depois no destino.

/*Você precisa fazer o jogador clicar duas vezes para cada movimento:
primeiro para selecionar a torre de origem, 
e depois para selecionar a torre de destino. 
Use uma variável para registrar qual modo o jogador está. */

let firstColumn = document.getElementById("first-column")

function start(){
    let btnGet = document.getElementsByClassName("block")
    firstColumn.appendChild(btnGet);
}