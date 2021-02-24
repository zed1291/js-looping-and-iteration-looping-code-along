
function writeCards(names, event) {
    let cards = []
    for ( let i = 0; i < names.length; i++ ) {
        cards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cards
}

function countDown(number) {
    while (number > 0) {
        console.log(number)
        number -= 1
    }
    console.log(number)
}

  
//   function countDown( startingNumber ) {
//     while ( startingNumber > 0 ) {
//       console.log( startingNumber );
//       startingNumber -= 1;
//     }
//     console.log( startingNumber );
//   }