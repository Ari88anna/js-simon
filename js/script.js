// Un alert() espone 5 numeri generati casualmente. 
// Da li parte un timer di 30 secondi. 
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//  Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1. Generare 5 numeri casuali ed esporli in un alert

// creo una variabile array vuoto che verrà popolato da numeri casuali generati
var arrayRandomNumber = [];


// popolo l'array attraverso un ciclo for e la funzione .push

while ( arrayRandomNumber.length < 5 ) {
    var numeroRandom = getRandomInt(1, 10)
   
    if (arrayRandomNumber.includes(numeroRandom) == false ) {
        arrayRandomNumber.push(numeroRandom);
    }
}
console.log(arrayRandomNumber)

// for ( var i = 0; i < 5; i++) {
//     var numeroRandom = Math.floor(Math.random() * 20) +1; 
//     arrayRandomNumber.push(numeroRandom);
//     console.log(arrayRandomNumber[i])
// }
// creo un alert a cui passo la variabile arrayRandomNumber. 
alert(arrayRandomNumber);


// 2. Chiedere numeri all'utente.

// dopo 30 secondi dall'alert parte il prompt per chiedere i numeri all'utente uno alla volta, quindi:
// avrò bisogno di un ciclo per reiterare il prompt
// dovrò inserire i numeri dell'utente all'interno di un array vuoto con la funzione .push

setTimeout (function() {

    alert('Inserisci uno alla volta i numeri che hai visto precedentemente');

    var arrayUserNumber = [];
    
    while (arrayUserNumber.length < 5 ) {

        var userNumber = parseInt(prompt('dammi un numero') );

        if (arrayUserNumber.includes(userNumber) == false ) {

            arrayUserNumber.push(userNumber);
        }
    }        

    var userFindNumber =[];

        // 3.confronto numeri casuali e numeri inseriti
        // controllo se il numero inserito dall'utente è incluso nell'arrayRandomNumber
    for ( var i = 0; i < arrayUserNumber.length; i++ ) {
        var thisUserNumber = arrayUserNumber[i];

        if (arrayRandomNumber.includes(thisUserNumber) == true ) {

            userFindNumber.push(thisUserNumber);
        }
    }   
    
    console.log( 'numeri indovinati', userFindNumber)

    // 4. stampo il risultato : quanti e quali numeri sono stati individuati

    var userCount = userFindNumber.length;
    document.getElementById('number').innerHTML ='hai trovato ' +  userCount + ' numeri esatti';

    for ( var n = 0; n < userFindNumber.length; n++) {
        document.getElementById('number-list').innerHTML += '<li>' + userFindNumber[n] + '</li>'
    }    

}, 2000);

//FUNZIONI
//funzione per generare un numero random
function getRandomInt(min, max) {    
    return Math.floor(Math.random() * (max - min)) + min;
}






    










