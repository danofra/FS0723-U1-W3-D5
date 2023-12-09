/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics
console.log("Esercizi JavaScript Basic");
/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("Esercizio A");
let sum = 10 + 20;
console.log(sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("Esercizio B");
let random = Math.floor(Math.random() * 20);
console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("Esercizio C");
let me = {
  name: "Liborio Daniele",
  surname: "Frasca",
  age: 25,
};
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("Esercizio D");
delete me.age;
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("Esercizio E");
me.skills = ["Visual Basic", "JavaScript, MySQL"];
console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("Esercizio F");
me.skills.push("PHP");
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("Esercizio G");
me.skills.pop();
console.log(me);
// Funzioni
console.log("Esercizi sulle Funzioni");
/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("Esercizio 1");
const dice = function () {
  return Math.floor(Math.random() * 6) + 1;
};
console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("Esercizio 2");
const whoIsBigger = function (num1, num2) {
  if (num1 > num2) {
    console.log("Il numero più grande è: ", num1);
  } else {
    console.log("Il numero più grande è: ", num2);
  }
};
whoIsBigger(9, 5);
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("Esercizio 3");
const splitMe = function (str) {
  return str.split(" ");
};
console.log(splitMe("Hello, my friend"));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("Esercizio 4");
const deleteOne = function (str, isFirst) {
  if (isFirst) {
    return console.log(str.slice(1));
  } else {
    return console.log(str.slice(0, -1));
  }
};
deleteOne("EREN JAEGER", true);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("Esercizio 5");
const onlyLetters = (str) => {
  str = str
    .split("")
    .filter((charAt) => !parseInt(charAt))
    .join("");
  str = str
    .split(" ")
    .filter((word) => word !== "")
    .join(" ");
  return str;
};
console.log(onlyLetters("Io ho 5 animali: 3 cane, 1 gatto e 1 pecora"));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("Esercizio 6");
const isThisAnEmail = function (email) {
  const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailTest.test(email);
};
console.log("La mail selezionata è: ", isThisAnEmail("test@xample.com"));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("Esercizio 7");
const whatDayIsIt = function () {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const currentDate = new Date();
  const dayIndex = currentDate.getDay() - 1;
  return daysOfWeek[dayIndex];
};
console.log("Oggi è: ", whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("Esercizio 8");
const rollTheDices = function (num) {
  let totalSum = 0;
  let values = [];
  for (let i = 0; i < num; i++) {
    const result = dice();
    totalSum = totalSum + result;
    values.push(result);
  }
  const obj = {
    sum: totalSum,
    values: values,
  };
  return obj;
};
const resultObject = rollTheDices(6);
console.log(resultObject.sum);
console.log(resultObject.values);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("Esercizio 9");
const howManyDays = function (date) {
  const inputDate = new Date(date);
  const currentDate = new Date();
  const timeDifference = currentDate - inputDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
};
const inputDate = "1998-01-18";
const daysPassed = howManyDays(inputDate);
console.log("Dal " + inputDate + " sono passati " + daysPassed + " giorni.");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("Esercizio 10");

const isTodayMyBirthday = function (birthday) {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const birthdayParts = birthday.split("-");
  const birthdayDay = parseInt(birthdayParts[0], 10);
  const birthdayMonth = parseInt(birthdayParts[1], 10);
  const result = currentDay === birthdayDay && currentMonth === birthdayMonth;
  return result;
};
const myBirthday = "18-01";
const result = isTodayMyBirthday(myBirthday);
if (result) {
  console.log("Oggi è il tuo compleanno! Auguri 🎁");
} else {
  console.log("Oggi non è il tuo compleanno. 😭");
}

// Arrays & Oggetti
console.log("Esercizi sugli Array & Oggetti");
// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
/* Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("Esercizio 11");
function deleteProp(obj, propToDelete) {
  if (obj.hasOwnProperty(propToDelete)) {
    delete obj[propToDelete];
  }
  return obj;
}
const updatedObject = deleteProp(me, "skills"); //"me" è l'oggetto creato nei precedenti esercizi
console.log(updatedObject);
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("Esercizio 12");
const newestMovie = function (movie) {
  let old = movie[0];
  movie.forEach((movieOld) => {
    if (parseInt(movieOld.Year) > parseInt(old.Year)) {
      old = movieOld;
    }
  });
  return old;
};
console.log(newestMovie(movies));
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
//con funzione
console.log("Esercizio 13");
const countMovies = function (numMovie) {
  let count = 0;
  numMovie.forEach(() => {
    count = count + 1;
  });
  return count;
};
console.log("Usando la funzione: ", countMovies(movies));
//senza funzione
let moviesLength = movies.length;
console.log("Senza usare la funzione: ", moviesLength);
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("Esercizio 14");
const onlyTheYears = movies.map((year) => {
  return year.Year;
});
console.log(onlyTheYears);
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("Esercizio 15");
const onlyInLastMillennium = (film) => {
  return film.filter((movies) => {
    return parseInt(movies.Year) < 1999;
  });
};
console.log(onlyInLastMillennium(movies));
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("Esercizio 16");
const sumAllTheYears = (sum) => {
  return sum.reduce((count, years) => count + parseInt(years.Year), 0);
};
console.log(sumAllTheYears(movies));
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("Esercizio 17");
const searchByTitle = movies.filter((movie) => {
  const result = movie.Title.includes("of");
  return result;
});
console.log(searchByTitle);
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("Esercizio 18");
const match = [];
const unmatch = [];
const searchAndDivide = movies.filter((movie) => {
  const result = movie.Title.includes("Avengers");
  if (result === true) {
    match.push(movie);
  } else {
    unmatch.push(movie);
  }
  return result;
});
console.log(match);
console.log(unmatch);
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("Esercizio 19");
const removeIndex = function (i, movies) {
  if (i >= 0 && i < movies.length) {
    // senza voler fare una copia dell'array
    movies.splice(i, 1);
    // voledo fare una copia del'array usciamo questo codice commentato
    /* const updatedMovies = [...movies.slice(0, i), ...movies.slice(i + 1)];  */
  }
  return movies;
};
console.log(removeIndex(1, movies));
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)
console.log("DOM");
//Sono stati creati degli elementi nella pagina per testare se effettivamente il codice inserito era corretto
console.log("Elementi sul file HTML inseriti da me");
/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("Esercizio 20");
const selectorId = function () {
  const selectId = document.getElementById("container");
  return selectId;
};
console.log(selectorId());
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("Esercizio 21");
const selectorTd = function () {
  const selectTd = document.querySelectorAll("td");
  return selectTd;
};
console.log(selectorTd());
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("Esercizio 22");
me.fruitFavourite = [];
const printTextInTableCells = function () {
  const tdText = document.querySelectorAll("td");
  tdText.forEach((td) => {
    console.log(td.textContent);
    // li pusho dentro l'oggetto .me dentro un array
    me.fruitFavourite.push(td.textContent);
  });
};
printTextInTableCells();
console.log(me);
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("Esercizio 23: Da vedere nella pagina web!");
const colorRedA = function () {
  const color = document.querySelectorAll("a");
  color.forEach((a) => {
    a.style.backgroundColor = "red";
  });
};
colorRedA();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("Esercizio 24: Da vedere nella pagina web!");
const newList = function () {
  const myList = document.getElementById("myList");
  const newLi = document.createElement("li");
  myList.appendChild(newLi);
  newLi.innerText = "Acciughe";
};
newList();
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("Esercizio 25: Da vedere nella pagina web!");
const deleteList = function () {
  const myList = document.querySelectorAll("myList,li");
  myList.forEach((li) => {
    li.innerText = "";
  });
};
deleteList();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("Esercizio 26: Da vedere nella pagina web!");
const addCSS = function () {
  const newTr = document.querySelectorAll("table tr");
  newTr.forEach((tr) => {
    tr.classList.add("test");
  });
};
addCSS();
// [EXTRA] JS Avanzato
console.log("Esercizii Extra JavaScript Avanzato");

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("Esercizio 27");
const halfTree = function (height) {
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
};

// Esempio di utilizzo della funzione
halfTree(5);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("Esercizio 28");
function tree(height) {
  for (let i = 1; i <= height; i++) {
    let spaces = " ".repeat(height - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}
tree(5);
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("Esercizio 29");
const isItPrime = function (number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return console.log("Il numero " + number + " non è un numero primo");
    }
  }
  return console.log("Il numero " + number + " è un numero primo");
};
isItPrime(67);
isItPrime(9);
