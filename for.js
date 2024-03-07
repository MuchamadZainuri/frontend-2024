/**
 * Looping menggunakan for.
 * Menampilkan angka 1-10.
 */
for (let i = 1; i < 11; i++) {
    console.log(i);
}

/**
 * Usecase Tampilkan 100 Produk
 * Tampilkan dari Produk 1
 * Sampai Produk 100
 * Naikan Produk 1 ke 2, dari 2 ke 3
 */

for (let produk = 1; produk <= 100; produk++) {
    console.log(`Produk ke :, ${produk}`);
}

const user = [
    {
        name: "Muchamad Zainuri",
        age: 17,
    },
    {
        name: "Rifki",
        age: 18,
    },
    {
        name: "Rizky",
        age: 19,
    },
];

for (let i = 0; i < user.length; i++){
    console.log(`nama: ${user[i].name}, umur: ${user[i].age} tahun`);
}
