// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.ç



//Creo un arrary per tenere le "bombe"
let bombs = [];
//Creo un punteggio per il giocatore
let score = 0;
//Function per generare le bombe
function generateBombs(){
    while (bombs.length < 16) {
        let bombPosition = Math.floor(Math.random() * 100) + 1;
        if (!bombs.includes(bombPosition)){
            bombs.push(bombPosition);
        }
    }
    
}
//Function per il game

const btn = document.querySelector('#btn');
//*console.log(btn);
    //aggiungo un event listener
    btn.addEventListener('click', function() {
        const gridMain = document.querySelector('#grid');
        //faccio il reset della grid
        gridMain.innerHTML = ''
    })