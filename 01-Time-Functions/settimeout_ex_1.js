/* setTimeout Øvelse */
const timer = delay => {
    console.log("Hej efter " + delay + " sekunder");
}

setTimeout(timer, 2*1000, 2);
setTimeout(timer, 4*1000, 4);
setTimeout(timer, 6*1000, 6);
