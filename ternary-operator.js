const age = 23;
if (age > 21) {
    console.log("Dewasa");
}
else {
    console.log("Belum Dewasa");
}

/**
 * Ternary Operator digunakan untuk membuat if else lebih singkat.
 */

age > 21 ? console.log("Dewasa") : console.log("Belum Dewasa");

/**
 * Ternary Operator dapat digunakan untuk menyimpan nilai ke variabel.
 */

const status = age > 21 ? "Dewasa" : "Belum Dewasa";
console.log(status);