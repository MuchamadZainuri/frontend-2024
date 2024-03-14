import users  from "./data.mjs";

// controller
const index = () => {
    users.forEach((user) => console.log(user))
}

const store = (user) => {
    users.push(user);
}

export { index, store }