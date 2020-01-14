// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

function getRandomNum(min, max) {
  var random = Math.floor(Math.random() * (max - min + 1) ) + min;
  return random;
}

var youLoseList = [];
for (var r = 0; r < 16; r++) {
  var cpuRandomNum = getRandomNum(1, 100);
  youLoseList.push(cpuRandomNum);
}
console.log(youLoseList);

var sameNum = false;
for (var i = 0; i < 84; i++) {
  if (sameNum == false) {
    var userNum = parseInt(prompt("Numero"));
    for (var j = 0; j < youLoseList.length; j++) {
      if (userNum == youLoseList[j]) {
        sameNum = true;
        j = youLoseList.length;
      } else {
        sameNum = false;
      }
    }
  } else {
    i = 84;
  }
}
if (sameNum == true) {
  console.log("Hai perso");
}
