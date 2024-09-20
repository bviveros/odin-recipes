/** index javascript file */

let count = 0;

let inc_el = document.getElementById("increment").onclick() = () => {
    count += 1;
    console.log("increment count: " + count);
}

inc_el.innerText = count;