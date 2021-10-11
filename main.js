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


// Calcola il prezzo finale del biglietto applicando lo sconto in base all'età
let sconto
let prezzo_finale
console.log("Il prezzo del biglietto senza sconto: " + prezzo);

if (userAge > 65) {

    //Calcola lo sconto in base all'età
    sconto = prezzo * z;
    console.log("lo sconto del biglietto è:  " + sconto);

    //Calcola il prezzo finale del biglietto applicando lo sconto
    prezzo_finale = prezzo - sconto;
    console.log("Il prezzo del biglietto è " + prezzo_finale);


    //Stampa il prezzo nella pagina
    document.getElementById("prezzo_biglietto").innerHTML = "Il prezzo scontato del biglietto per over 65 è : " + prezzo_finale.toFixed(2) + "€"

} else if (userAge < 18) {

    //Calcola lo sconto in base all'età
    sconto = prezzo * y;
    console.log("lo sconto del biglietto è:  " + sconto);

    //Calcola il prezzo finale del biglietto applicando lo sconto
    prezzo_finale = prezzo - sconto;
    console.log("Il prezzo del biglietto è " + prezzo_finale);


    //Stampa il prezzo nella pagina
    document.getElementById("prezzo_biglietto").innerHTML = "Il prezzo del biglietto per i minorenni è : " + prezzo_finale.toFixed(2) + "€"

} else {
    prezzo_finale = prezzo;
    console.log("Il prezzo del biglietto è " + prezzo_finale);

    //Stampa il prezzo nella pagina
    document.getElementById("prezzo_biglietto").innerHTML = "Il prezzo del biglietto è : " + prezzo_finale.toFixed(2) + "€"

}


