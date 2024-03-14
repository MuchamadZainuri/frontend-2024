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
 * method find untuk mencari satu data saja yang sesuai ketentuan
 * mengembalikan nilai berupa object
 */
const foundUser = users.find((user) => user.age > 20);

console.log(foundUser);