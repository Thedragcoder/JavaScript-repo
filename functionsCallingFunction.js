// calling functions inside other function 

// this function cuts the fruit into four pieces 
function cutIntoPieces(fruits) {
    return fruits * 4;
}
function fruitJuices(apples, oranges) {
    const applePieces = cutIntoPieces(apples);
    const orangePieces = cutIntoPieces(oranges);
    return `the juice is made of ${applePieces} slices of apples and
     ${orangePieces} slices of oranges`;
}

console.log(fruitJuices(2, 3)); 