/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// 1) STRINGA: serve per indicare  un numero limitato di caratteri;
//  es. const testo = "ciao"
//  nel caso della STRINGA il testo è delimitato dalle virgolette;

// 2)NUMERICO: serve per indicare un numero (non si fa distinzione tra intero o decimale);
//  es. const numero = 456789
//  Il datatype numerico non ha bisogno di essere delimitato da virgolettte, altrimenti diventerrebe una STRINGA

// 3)BOOLEAN: serve per indicare se un affermazione è vera o falsa (true | false) ;
//  es. const veroOFalaso = true

// 4)TYPEOF: serve per indicare che tipo di varibile è qulla desiderata;
//  es. typeof "john" =======> mi darà come risultato un tipo string;

// 5)UNDEFINED: nel caso una variabile non ha un valore (value) specificato, allora si attribuisce un valore undefined;
//  es. const car; =====> car non ha un valore definito perciò si definisce undefined;

// 6) NULL: indica l'assenza di un oggetto ma non vuol dire che questo non esista, semplicemente non è stato definito;
//  es. let nome = null
//  a differenza di UNDEFINED che mi darà error dato che mi sono scordato di inserire il valore, con NULL esplicito che un certo dato non ha un valore quindi non mi darà error

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Mirco";
console.log("il mio nome", name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 12; 
let num2 = 20;
console.log(num1 + num2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name = "Orosio";
console.log(name);
// nel caso io sostituissi let con const, il risultato della console sarebbe "Uncaught TypeError: Assignment to constant variable. at D1.js:47:6"
// questo perchè uso const quando voglio che una variabile abbia un certo valore per tutta la durata del codice, uso invece let quando so che il valore cambieà;

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("il risultato è:", 4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log(name1 === name2);
// camabio la variabile name2 toLocaleLowerCase()
name2 = name2.toLocaleLowerCase();
console.log(name2);

console.log(name1 === name2);
