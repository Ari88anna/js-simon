// Un alert() espone 5 numeri generati casualmente. 
// Da li parte un timer di 30 secondi. 
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//  Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1. Generare 5 numeri casuali ed esporli in un alert

// creo una variabile array vuoto che verrà popolato da numeri casuali generati
var arrayRandomNumber = [];

// popolo l'array attraverso un ciclo for e la funzione .push

for ( var i = 0; i < 5; i++) {
    var numeroRandom = Math.floor(Math.random() * 6); 
    arrayRandomNumber.push(numeroRandom);
}
// creo un alert a cui passo la variabile arrayRandomNumber. 
alert(arrayRandomNumber);


// 2. Chiedere numeri all'utente.

// dopo 30 secondi dall'alert parte il prompt per chiedere i numeri all'utente uno alla volta, quindi:
// avrò bisogno di un ciclo per reiterare il prompt
// dovrò inserire i numeri dell'utente all'interno di un array vuoto con la funzione .push

setTimeout(askNumber, 5000);

function askNumber() {
    var arrayUserNumber = [];

    for ( var j = 0; j < 5; j++) {
        var userNumber = parseInt(prompt('Inserisci uno alla volta i numeri che hai visto precedentemente')) 
        arrayUserNumber.push(userNumber);
        console.log(arrayUserNumber)
    }
}



// 3.confronto numeri casuali e numeri inseriti

// 4. stampo il risultato : quanti e quali numeri sono stati individuati

