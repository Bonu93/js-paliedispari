// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt('Inserisci una parola')

const palindrome = checkPalindrome(userWord);

if (palindrome) {
    console.log(`La parola ${userWord} è palindroma`);
} else {
    console.log(`La parola ${userWord} non è palindroma`);
}















/**
 * 
 * @param {string} word 
 * Check if the word is palindrome or not
 */
function checkPalindrome(word) {
    let revWord = ''
    let palindrome = false;
    for (let i = word.length - 1; i >= 0; i--) {
        revWord += word[i]
    }
    if (word === revWord) {
       palindrome = true;
    }
    return palindrome
}