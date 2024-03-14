// buat array
const names = ["udin", "agus", "gilang"]

// method forEach untuk iterasi isi array
names.forEach( (name) => console.log(`Nama: ${name}`))

/**
 * method map untuk memformat isi array
 */
const formattedName = names.map((name) => `Bapak/Ibu. ${name}`)
console.log(formattedName);