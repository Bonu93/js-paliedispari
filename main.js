// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const btnStart = document.querySelector('.btn-start')

btnStart.addEventListener('click', function(){

    const userWord = prompt('Inserisci una parola')
    
    const palindrome = checkPalindrome(userWord);
    
    if (palindrome) {
        console.log(`La parola ${userWord} è palindroma`);
    } else {
        console.log(`La parola ${userWord} non è palindroma`);
    }

})


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const btnPlay = document.querySelector('.btn-play')

btnPlay.addEventListener('click', function(){
    let userChoice = prompt('Scegli pari o dispari?').trim().toLowerCase();

    while (userChoice !== 'pari' && userChoice !== 'dispari') {
        alert('Scrivi "pari" o "dispari"!');
        userChoice = prompt('Scegli pari o dispari?').trim().toLowerCase();
    }

    let userNum = parseInt(prompt('Scegli un numero da 1 a 5'));
    
    while (userNum < 1 || userNum > 5 || isNaN(userNum)) {
        alert('Puoi scegliere soltanto numeri da 1 a 5');
        userNum =parseInt(prompt('Scegli un numero da 1 a 5'));
    }

    const cpuNum = genRandomNumber(1, 5)
    
    const total = (userNum + cpuNum)
    console.log(`Hai scelto ${userChoice}`);
    console.log(`Il tuo numero è ${userNum}`);
    console.log(`Il computer ha scelto ${cpuNum}`);
    console.log(`La somma è ${total}`);

    const even = checkOddEven(total)

    if (even && userChoice === 'pari') {
        console.log('Hai vinto');
    } else if (even === false && userChoice === 'dispari') {
        console.log('Hai vinto');
    } else {
        console.log('Vince il computer');
    }
})








/* 
*******  FUNCTIONS  ********
*/


/**
 * 
 * @param {*} word 
 * @returns true or false, checks if word is palindrome or not
 */
function checkPalindrome(word) {
    let revWord = '';
    let palindrome = false;
    for (let i = word.length - 1; i >= 0; i--) {
        revWord += word[i]
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
    const rand = Math.floor(Math.random() * (max - min +1)) + min;
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