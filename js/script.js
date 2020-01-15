// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente
// che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100,
// con difficoltà 1 => da 1 a 80
// con difficoltà 2=> da 1 a 50

// array per salvare numeri random
var randomNumList = [];

// array per salvare numeri utente
var userNumList = [];

// generare 16 numeri random
while (randomNumList.length < 16) {
  var randomNum = genRandomNum(1, 100);
  // evitare ripetizione di numeri nell'array
  var alreadyIn = isInArray(randomNumList, randomNum);
  if (alreadyIn == false){
    randomNumList.push((randomNum));
  }
}
console.log(randomNumList.sort());

// variabile per il numero di tentativi per difficoltà
var attempts = 0;
var maxAttempts = 0;

// variabile per verificare la fine parita / vittoria
var youWin = false;

// scelta difficoltà
do {
  var levelChoice = prompt("Scegli la difficoltà da 0 a 2");
  var levelInRange = isInRange(0, 2, levelChoice);
  if (levelInRange == false) {
    alert("Inserisci un valore corretto");
  } else if (levelChoice == 0) {
    maxAttempts = 84;
    var maxNumLvl = 100;
  } else if (levelChoice == 1) {
    maxAttempts = 64;
    var maxNumLvl = 80;
  } else if (levelChoice == 2) {
    maxAttempts = 50;
    var maxNumLvl = 34;
  }
} while (levelInRange == false);

alert("Hai scelto la modalità con " + maxNumLvl + " numeri e " + maxAttempts + " tentativi massimi prima del punteggio massimo! Iniziamo!");

// faccio inserire numero all'utente
do {
  var userNum = parseInt(prompt("Inserisci un numero da 1 a " + maxNumLvl));
  var validationUserNum = isInRange(1, maxNumLvl, userNum);
  var validationUserNum2 = isInArray(userNumList, userNum);
  console.log(validationUserNum);
  if (validationUserNum == true && validationUserNum2 == false) {
    youWin = isInArray(randomNumList, userNum);
    userNumList.push(userNum);
    attempts++;
    // se il numero che inserisce è presente nella lista dei numeri random il gioco finisce
    if (youWin == true) {
      alert("Game Over. Il tuo punteggio è di " + (attempts - 1));
      console.log(userNumList);
      // se l'utente arriva alla fine dei tentativi senza mai sbagliare numero
    } else if (attempts == maxAttempts) {
      alert("Complimenti! Hai ottenuto il punteggio massimo");
      youWin = true;
    }
  } else {
    alert("Il numero che hai inserito non rispetta le condizioni richieste, inseriscine un altro");
  }
} while (youWin == false);


// funzione per generare numeri random
function genRandomNum(min, max) {
  var random = Math.floor(Math.random() * (max - min + 1) ) + min;
  return random;
}

// funzione per controllare elemento presente in array
function isInArray(array, element) {
  var i = 0;
  var sameNum = false;
  while (i < array.length && sameNum == false) {
    if (array[i] == element) {
      sameNum = true;
    }
    i++;
  }
  return sameNum;
}

// funzione per verificare range numero
function isInRange(min, max, element) {
  var inRange = false;
  if (element >= min && element <= max) {
    inRange = true;
  }
  return inRange;
}
