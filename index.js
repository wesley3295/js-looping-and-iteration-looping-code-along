function writeCards( namesArray, event) {
    let thankYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

function countDown(count) {
    while(count > 0){
    console.log(count)
    count -= 1;
    }
    console.log(count)
}