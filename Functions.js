// function declaration 
console.log(calculateTheAge(2001));

function calculateTheAge(bornYear) {
    yearNow = 2022;
    return yearNow - bornYear;
}


// function expression 
const ageCalculation = function (yearBorn) {
    currentYear = 2022;
    return currentYear - yearBorn;
}
console.log(ageCalculation(2001));

/*
The difference between fucntion declaration and function expression
is that function declaration can be used before declaring the function LINE NO.2
whereas function expression cannot be used before declaring the function 
this is because of the process called hoisting. 
*/
