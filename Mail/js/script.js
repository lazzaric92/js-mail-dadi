const emailsList = ['123@gmail.com', 'blabla@libero.it', 'chachacha@yahoo.it', 'emailimbarazzantexx345@libero.it', 'emailseriosa@boo.com'];
let userEmail = prompt('Inserisci il tuo indirizzo email');
userEmail = userEmail.toLowerCase();

if(emailsList.includes(userEmail)){
    console.log('Handshaking\n Success!');
} else {
    console.log('Access denied');
}