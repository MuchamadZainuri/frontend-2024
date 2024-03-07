

// Expression Function
const itungUmur = function (bod) {
    const year = 2024;
    const age = year - bod;

    return age;
} 


// Arrow Function 
const hitungUmur = (bod) => {
    const year = 2024;
    const age = year - bod;

    return age;
}
console.log(hitungUmur(2004));


// simply arrow function
const getAge = (bod) => 2024 - bod;

console.log(getAge(2002));
