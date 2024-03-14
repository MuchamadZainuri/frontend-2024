import { index, store } from './controller.mjs';

// main function
const main = () => { 
    index();
    const user = {
        name: "zain",
        age: 20
    }
    store(user);
    index();
}
main();