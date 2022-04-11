/* Funções */

function comparador() { 
	return Math.random() - 0.5; 
}

function addcards(n){
    let usedcards = backs.slice(0, (n/2));
    let cards = document.querySelector("ul");
    let contador = 0;
    for (let i = 0; i < n; i++){
        cards.innerHTML += `
            <ul class="card" onClick="flip(this)">
                <li class="face"><img src="/images/front.png"></li>
                <li class="back-face face"><img src="${usedcards[contador]}"></li>
            </ul>
        `
        if (contador === usedcards.length - 1){
            contador = 0;
            usedcards = usedcards.sort(comparador);
        }else{
            contador++;
        }
    }
}

function flip(card){
    
}

/*---------------------------------------------------------------------------------- */

/* Variáveis globais */

let number = prompt("Selecione o número de cartas (nº par entre 4 - 14)");

while (number % 2 !== 0 || number < 4 || number >14){
    number = prompt("Selecione o número de cartas (nº par entre 4 - 14)");
}

let backs = [
    "/images/bobrossparrot.gif",
    "/images/explodyparrot.gif",
    "/images/fiestaparrot.gif",
    "/images/metalparrot.gif",
    "/images/revertitparrot.gif",
    "/images/tripletsparrot.gif",
    "/images/chicken.gif",
]
/*---------------------------------------------------------------------------------- */

/* Invocação de funções */
backs = backs.sort(comparador);
addcards(number);
