// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente
// che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100,
// con difficoltà 1 => da 1 a 80
// con difficoltà 2=> da 1 a 50

// funzione per generare numeri random
function genRandomNum (min, max) {
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

// array per salvare numeri random
var randomNumList = [];

// array per salvare numeri utente
var userNumList = [];

// generare 16 numeri random
while (randomNumList.length < 16) {
  var randomNum = genRandomNum(1, 100);
  console.log(randomNum);
  var alreadyIn = isInArray(randomNumList, randomNum);
  if (alreadyIn == false){
    randomNumList.push((randomNum));
  }
}
console.log(randomNumList.sort());
