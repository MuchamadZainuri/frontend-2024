/**
 * Membuat fungsi sum
 * Menjumlahkan semua bilangan
 * Fungsi memiliki 2 parameter
 */


// not rest
function sum(a,b,c,d,e,f) {
    let hasil = a + b + c + d + e + f;
    return hasil;
    // console.log(hasil);
}

console.log(sum(20,12,43,54,63,12));


// with rest parameter

// function sum(...numbers) {
//     let hasil = 0;
//     for (const number of numbers) {
//         hasil += number;
//     }

//     return hasil;
//     // console.log(hasil);
// }

// console.log(sum(20, 31, 21, 12));


// another case
function showFamilies(suami, istri, ...anaks) {
    console.log(`Suami: ${suami}`);
    console.log(`Istri: ${suami}`);
    for (const anak of anaks) {
        console.log(`Anak: ${anak}`);
    }
}

showFamilies("Sugiono", "Luncita luna", "Agus", "Ibnu", "Farhan")
