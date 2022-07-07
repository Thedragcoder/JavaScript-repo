// ARROW FUNCTION 
/* Arrow function is one of the features introduced in the ES6 version of JavaScript.
 It allows you to create functions in a cleaner way compared to regular functions.*/

const calculateAge = bornYear => 2022 - bornYear;
// this is only for one parameters 
console.log(calculateAge(2001));


// for multiple lines of statements 
const age = yearBorn => {
    const currentYear = 2022;
    return currentYear - yearBorn;
}
console.log(age(1992));

// for more than one parameters 

const yearsUntilRetirement = (dob, fName) => {
    const age = 2022 - dob;
    const baseRetirementAge = 65 - age;
    return `${fName} you have ${baseRetirementAge} years left until retirement`;
}
console.log(yearsUntilRetirement(1992, 'john')); 