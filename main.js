//Chiede il numero di km da voler percorrere

let kilometri = prompt("Quanti kilometri vuoi percorrere?");

/* Number(kilometri); */

console.log(Number(kilometri));

//Chiede l'età all'utente

let userAge = prompt("Quanti anni hai?");

console.log(Number(userAge));


//Calcoliamo il prezzo del biglietto in base ai kilometri scelti


x = 0.21;

const prezzo = kilometri * x;

console.log(prezzo);

// Calcola il prezzo finale del biglietto in base all'età
y = 0.2;

const prezzo_finale = prezzo * y;

console.log(prezzo_finale);