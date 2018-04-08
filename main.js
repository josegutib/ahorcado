console.log('Hola');

let secretWord = "paloma";
let guesses = [];
// let visibleWord =  Array(secretWord.length+1).join("-");

function visibleWord(){
  let result = document.getElementById('input-letter');
  let answer =[];
  // return Array(secretWord.length+1).join("-");
  for(let i=0; i<secretWord.length; i++){
    if(isOnGuesses(secretWord[i])){
      answer.push(secretWord[i]);
    }else{
      answer.push("-");
    }
  }
  result = return answer.join("");
}

//recibe una letra
//devuelve true si letter esta dentro del array guesses
//devuelve false en caso contrario
function isOnGuesses(letter){
  return guesses.includes(letter);
}

function guessLetter(letter){
  guesses.push(letter);
}

guessLetter("p");
guessLetter("a");
let currentVisibleWord = visibleWord();
console.log(currentVisibleWord); //deberia imprimir "pa---a"

guessLetter("l");
currentVisibleWord = visibleWord();
console.log(currentVisibleWord); //deberia imprimir "pal--a"
