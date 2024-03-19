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
        gridMain.innerHTML = '';
        //faccio il reset bombs
        bombs = [];
        //faccio il reset points
        score = 0;
        //genero le bombe
        generateBombs();
        //Riempo la grid con le cells
        for (let i = 1; i <= 100; i++) {
            const newSquare = generateSquare(i);
            // Aggiungo un event listener per il click
            newSquare.addEventListener('click', handleSquareClick);
            gridMain.appendChild(newSquare);
        }
    });

    // Funzione per generare una casella della griglia
function generateSquare(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = '<span>' + number + '</span>';
    return newSquare;
}

//function per gestire il click nelle cells
function handleSquareClick() {
    //ottengo il numero della cell clickta
    const squareNumber = parseInt(this.textContent);
    //*cl
    console.log(squareNumber);
    if (bombs.includes(squareNumber)) {
        this.classList.add('red')
        //emette un alert che hai perso;
        alert('Hai preso una bomba. Il tuo score e: ' + score);
        //Reset Score
        score = 0
    } else {
        this.classList.add('blue');
        //Aumenta la score
        score++;
    }
}

//function pers il giocatore se ha vinto
function verifiedWin() {
    //calcolo il numeo di cells rimanenti con escluso le bombs
    const restSquares = 100 - bombs.length;
    // Se il score del giocatore e uguale a le celle rimanenti ha vinto
    if (score === restSquares) {
        //!FACCIO UNA ALERT CON HAI VINTO
        alert('GG !! Hai vinto!');
    }
}
