// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.ç

//prendiamo il btn del html
const btn = document.querySelector('#btn');

//creo l'evento listener per il btn
btn.addEventListener('click', function() {
    //Creo la griglia per i numeri
    const mainGrid = document.querySelector('#grid');
    for (let i = 1; i <= 100; i++){
        const newSquare = generateSquare(i);
        //aggiungo square allla griglia
        mainGrid.appendChild(newSquare);
    }
});

//Creo la funzione per generare ogni cella della griglia
function generateSquare(number){
    //creo un div con lo square e il numero per ogni cella
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = '<span>' + number + '</span>';

    //aggiungo la cella l'evento click 
    newSquare.addEventListener('click', function(){
        this.classList.add('blue'); 
        //Ogni cella clickata viene mostrata nel cl
        console.log("Numero cella" + number );
    })
    
    //retorna 
    return newSquare;
}

//Creo un arrary per tenere le "bombe"
let bombs = [];
//Creo un punteggio per il giocatore
let score = 0;
//Function per generare le bombe
function generateBombs(){
    while (bombs.length < 16) {
        let bombPosition = Math.floor(Math.random() * 100) + 1;
    }
}
//Aggiornamento della funzione