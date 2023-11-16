let saveEl = document.getElementById("save-el")
let gecmisBilgi = localStorage.getItem("gecmisBilgi")
if( gecmisBilgi !== null) {
    saveEl.textContent = localStorage.getItem("gecmisBilgi")
} else {
    saveEl.textContent = ""
}

let toplamPaxEleman = document.querySelector ("h3")
let totalPax = localStorage.getItem ("totalPax")

if (totalPax !== null) {
    toplamPaxEleman.textContent = localStorage.getItem ("totalPax")
} else {
    toplamPaxEleman.textContent = "Toplam Pax: 0"
}

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}


function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    localStorage.setItem("gecmisBilgi", saveEl.textContent);

    let paxToplami = parseInt(localStorage.getItem("totalPax")) || 0;
    paxToplami +=  count;
    localStorage.setItem("totalPax", paxToplami);

    toplamPaxEleman.textContent = "Toplam Pax: " + paxToplami; // Update total Pax display
    countEl.textContent = 0; // Reset count display
    count = 0; // Reset count value
}

