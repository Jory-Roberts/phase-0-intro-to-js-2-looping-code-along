
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);

    }

    return messages;

}

function countDown() {
    let count = 11;
    while (count > 0) {
        count--;
        
        console.log(count);
    }
}

