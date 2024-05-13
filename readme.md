! Gioco dei dadi
Il giocatore gioca contro il computer.
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Salvo in due costanti (utente e AI) i numeri generati randomicamente
    se i numeri sono uguali
        si ha un pareggio
    se il numero dell'utente è maggiore di quello dell'AI
        ha vinto l'utente
    altrimenti
        ha vinto l'AI


! Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Chiedo all'utente la email e la salvo in una costante
Creo un array con una lista di email
    se la email dell'utente è inclusa nell'array
        stampo un messaggio di esito positivo
    altrimenti
        stampo un messaggio di esito negativo


! Saltare a piè dispari [Bonus]
Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è pari inseriscilo nell’array

Creo un array vuoto
Scrivo un ciclo con indice che va da 0 a 6; ad ogni ciclo
    chiedo all'utente di inserire un numero e lo salvo in una costante
    se il numero inserito è pari (% 2 == 0)
        viene pushato nell'array
Stampo l'array