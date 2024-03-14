// buat array of object
const users = [
    {
        name: "udin",
        age: 17
    },
    {
        name: "agus",
        age: 35
    },
    {
        name: "gilang",
        age: 40
    }
]

/** 
 * method find untuk mencari semua data yang sesuai ketentuan
 * Mengembalikan nilai berupa array
 */

const filterUser = users.filter((user) => user.age > 20)

console.log(filterUser);