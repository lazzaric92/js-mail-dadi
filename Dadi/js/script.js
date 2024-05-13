const userNumber = Math.floor((Math.random() * 6) + 1);
const AINumber = Math.floor((Math.random() * 6) + 1);
let result;

if (userNumber == AINumber) {
    result = 'Pareggio';
} else if (userNumber > AINumber) {
    result = 'L\'utente ha vinto! \:\)';
} else {
    result = 'L\'AI ha vinto \:\(';
}

console.log(userNumber, AINumber, result);