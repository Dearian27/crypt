const keywordHTML = document.getElementById('keyword');
const input = document.getElementById('input');
const responseHTML = document.getElementById('response');
const btnCrypt = document.getElementById('btnCrypt');
const btnUncrypt = document.getElementById('btnUncrypt');

const letters = 'abcdefghijklmnopqrstuvwxyz';
const alphabet = '_abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
/*
    1 2 3 4 5 6
  1 a b c d e f
  2 b c d e f g
  3 c d e f g h
  4 d e f g h i
  5 e f g h i j
  6 f g h i j k

*/

// keywordHTML.value.toLocaleLowerCase();

let keyword;
let value;


const crypt = () => {
  let response = '';
  for(const [index, char] of value.split('').entries()) {
    const charNumber = alphabet.indexOf(char);
    const keywordCharNumber = alphabet.indexOf(keyword[index % keyword.length]);
    if(charNumber === -1) {console.log("Error"); return}
    response += alphabet[charNumber + keywordCharNumber -1];
  }
  responseHTML.innerHTML = response;
}

const uncrypt = () => {
  let response = '';
  for(const [index, char] of value.split('').entries()) {
    const charNumber = alphabet.indexOf(char);
    const keywordCharNumber = alphabet.indexOf(keyword[index % keyword.length]);

    if(charNumber === -1) {console.log("Error"); return}
    if(charNumber < keywordCharNumber) {
      response += alphabet[Math.abs(27 + (charNumber - keywordCharNumber))];
    } else {
      response += alphabet[Math.abs(charNumber - keywordCharNumber +1)];
    }
  }
  responseHTML.innerHTML = response;
};

btnCrypt.addEventListener('click', () => {
  keyword = keywordHTML.value.toLocaleLowerCase();
  value = input.value.toLocaleLowerCase();
  crypt();
})

btnUncrypt.addEventListener('click', () => {
  keyword = keywordHTML.value.toLocaleLowerCase();
  value = input.value.toLocaleLowerCase();
  uncrypt();
})