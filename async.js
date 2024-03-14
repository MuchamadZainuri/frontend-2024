
function download() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Download..."), 3000);
    });
}

function verfy() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Verify..."), 2000);
    });
}

function notify() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Complete..."), 1000);
    });
}

async function main() {

    // use promise consuming
    // download().then((result) => {
    //     console.log(result);
    //     return verfy();
    // }).then((result) => {
    //     console.log(result);
    //     return notify();
    // }).then((result) => {
    //     console.log(result);
    // })

    //use async await
    console.log(await download());
    console.log(await verfy());
    console.log(await notify()); 
}

main();