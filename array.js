const animals = ["fish", "cat", "dog"];
console.log(animals[1]);

for (let i = 0; i < animals.length; i++){
    console.log(`Hewan : ${animals[i]}`);
}


// menggunakan fo-of
for (const animal of animals) {
    console.log(`Hewan : ${animal}`);
}