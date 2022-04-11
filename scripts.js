/* Funções */

function comparador() { 
	return Math.random() - 0.5; 
}

function addcards(n){
    let usedcards = backs.slice(0, (n/2));
    let usedcards2 = usedcards.sort(comparador);
    usedcards = usedcards.concat(usedcards2);
    usedcards = usedcards.sort(comparador);
    let cards = document.querySelector("ul");
    for (let i = 0; i < n; i++){
        cards.innerHTML += `
            <ul class="card" onClick="flip(this)">
                <li class="face"><img src="/images/front.png"></li>
                <li class="back-face back"><img src="${usedcards[i]}"></li>
            </ul>
        `
    }
}

function flip(card){
    let cardselected = document.querySelector(".front-face-selected");
    let cardselectedback = document.querySelector(".back-face-selected");
    card.querySelector(".face").classList.add("front-face-selected");
    card.querySelector(".back-face").classList.add("back-face-selected");
    if (cardselected !== null){
        if (card.querySelector(".back-face").innerHTML === cardselectedback.innerHTML){
            card.querySelector(".face").classList.add("front-continue");
            card.querySelector(".back-face").classList.add("back-continue");
            cardselected.classList.add("front-continue");
            cardselectedback.classList.add("back-continue");
        }
        setTimeout(function(){
            card.querySelector(".back-face").classList.remove("back-face-selected");
            card.querySelector(".face").classList.remove("front-face-selected");
            document.querySelector(".back-face-selected").classList.remove("back-face-selected");
            document.querySelector(".front-face-selected").classList.remove("front-face-selected");
        }, 1000);
        
    }
}
/*---------------------------------------------------------------------------------- */

/* Variáveis globais */

let number = prompt("Selecione o número de cartas (nº par entre 4 - 14)");

while (number % 2 !== 0 || number < 4 || number >14){
    number = prompt("Selecione o número de cartas (nº par entre 4 - 14)");
}

let backs = [
    "images/bobrossparrot.gif",
    "images/explodyparrot.gif",
    "images/fiestaparrot.gif",
    "images/metalparrot.gif",
    "images/revertitparrot.gif",
    "images/tripletsparrot.gif",
    "images/unicornparrot.gif",
]
/*---------------------------------------------------------------------------------- */

/* Invocação de funções */
backs = backs.sort(comparador);
addcards(number);
