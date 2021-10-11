//Chiede il numero di km da voler percorrere

const kilometri = prompt("Quanti kilometri vuoi percorrere?");

/* Number(kilometri); */

console.log(Number(kilometri));

//Chiede l'età all'utente

const userAge = prompt("Quanti anni hai?");

console.log(Number(userAge));


//Calcoliamo il prezzo del biglietto in base ai kilometri scelti

x = 0.21;

y = 0.2;

z = 0.4;

const prezzo = kilometri * x;


// Calcola il prezzo finale del biglietto in base all'età

let prezzo_finale
console.log("Solo kilometri: " + prezzo);

if (userAge > 65) {
    prezzo_finale = prezzo * z;
} else if (userAge < 18) {
    prezzo_finale = prezzo * y;
} else {
    prezzo_finale = prezzo;
}

console.log("Il prezzo del biglietto è " + prezzo_finale);