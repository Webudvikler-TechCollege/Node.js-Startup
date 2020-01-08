/* setInterval Øvelse */
let counter = 0;
const intervalId = setInterval(() => {
    console.log("Hej verden");
    counter++;

    if(counter === 5) {
        console.log("Færdig!");
        clearInterval(intervalId);
    }
}, 2 * 1000);