function addcards(n){
    const cards = document.querySelector(".cards");
    let i = 0;
    while ( i < n){
        cards.innerHTML += `
            <div class="card">
                <div class="front-face face">Frente</div>
                <div class="back-face face">Verso</div>
            </div>
        `
        i++;
    }
}

let number = prompt("Selecione o número de cartas (nº par entre 4 - 14)");
while (number % 2 !== 0 || number < 4 || number >14){
    number = prompt("Selecione o número de cartas (nº par entre 4 - 14)");
}
addcards(number);