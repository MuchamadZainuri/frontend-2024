const req = {
    body: {
        name: "zain",
        age: 20,
        major: "Informatics"
    }
};

// manual
// const name = req.body.name;
// const age = req.body.age;
// const major = req.body.major;

// destructing
// const { name, age, major } = req.body;
// console.log(name, age, major);

/**
 * Membuat array family
 * - Suami: Michael
 * - Istri: Hannah
 * - Anak: Jonas
 */

const family = [
    "Michael",
    "Hannah",
    "Jonas"
];

// manual
// const suami = family[0];
// const istri = family[1];
// const anak = family[2];


// Destructing
const [suami, istri, anak] = family;
console.log(`nama Suami ${suami},\nnama istri ${istri},\nnama anak ${anak}`);

