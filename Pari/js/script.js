const numbersList = [];

for (let i = 0; i < 6; i++){
    const userNumber = Number.parseInt(prompt('Type a number') ,10);
    if (userNumber % 2 === 0){
        numbersList.push(userNumber);
    }
}

console.log(numbersList);