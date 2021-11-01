// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const btnStart = document.querySelector('.btn-start');
const wordInput = document.getElementById('word');
const palindromeRes = document.querySelector('.palindrome-result');

btnStart.addEventListener('click', function(){

    const userWord = wordInput.value.trim().toLowerCase();
    
    
    if (checkPalindrome(userWord)) {
        palindromeRes.innerHTML = `<h3 class="text-danger mt-3">La parola ${userWord} è palindroma!</h3>`;
    } else {
        palindromeRes.innerHTML = `<h3 class="text-danger mt-3">La parola ${userWord} non è palindroma!</h3>`;
    }
})


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const btnPlay = document.querySelector('.btn-play');
const oddEvenInput = document.getElementById('odd-even');
const oddEvenNumInput = document.getElementById('oddeven-number');
const oddevenBox = document.querySelector('.result');
const oddEvenResult = document.querySelector('.oddeven-result');


btnPlay.addEventListener('click', function(){
    let userChoice = oddEvenInput.value;

    let userNum = parseInt(oddEvenNumInput.value);
    
    while (userNum < 1 || userNum > 5 || isNaN(userNum)) {
        alert('Puoi scegliere soltanto numeri da 1 a 5, te ne verrà assegnato uno casuale');
        userNum = genRandomNumber(1, 5);
    }

    const cpuNum = genRandomNumber(1, 5);
    
    const total = (userNum + cpuNum);

    oddevenBox.innerHTML = `
    <h4 class="you mt-3">
    Hai scelto ${userChoice}, il tuo numero è ${userNum}
    </h4>
    <h4 class="cpu"
    >Il computer ha scelto ${cpuNum}
    </h4>
    <h4 class="sum">
    La somma è ${total}
    </h4>`;

    if (checkOddEven(total) && userChoice === 'pari') {
        oddEvenResult.innerHTML = `<h3 class="text-danger">Hai vinto!!</h3>`;
    } else if (checkOddEven(total) === false && userChoice === 'dispari') {
        oddEvenResult.innerHTML = `<h3 class="text-danger">Hai vinto!!</h3>`;
    } else {
        oddEvenResult.innerHTML = `<h3 class="text-danger">Vince il computer!</h3>`;
    }
})








/* 
*******  FUNCTIONS  ********
*/


/**
 * 
 * @param {string} word 
 * @returns true or false, checks if word is palindrome or not
 */
function checkPalindrome(word) {
    let revWord = '';
    let palindrome = false;
    for (let i = word.length - 1; i >= 0; i--) {
        revWord += word[i];
    }
    if (word === revWord) {
       palindrome = true;
    }
    return palindrome;
}

/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns a random number between min and max
 */
function genRandomNumber (min, max) {
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
}

/**
 * 
 * @param {number} number 
 * @returns true or false, checks if number is odd or even
 */
function checkOddEven(number) {
    let even = false;
    if (number % 2 === 0) {
        even = true;
    }
    return even;
}