/** index javascript file */

let incEl = document.getElementById("counter");
let count = 0;

function incrementCounter() {
    count += 1;
    incEl.innerText = count
}

function decrementCounter() {
    if( count > 0) {
        count -= 1;
    }
    incEl.innerText = count
}

function resetCounter() {
    count = 0;
    incEl.innerText = count
}

incEl.innerText = count;