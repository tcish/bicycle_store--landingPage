const cycle1El = document.querySelector("#cycle1")
const cycle2El = document.querySelector("#cycle2")
const cycle3El = document.querySelector("#cycle3")
const cycleNameEl = document.querySelector("#cycleName")
const cycleImgEl = document.querySelector("#cycleImg")
const cyclePriceEl = document.querySelector("#cyclePrice")

function cycleDetails(cycle, name, image, price) {
  cycle.addEventListener("click", () => {
    cycleNameEl.innerHTML = name
    cycleNameEl.classList = "active"
    cycleImgEl.src = image
    cyclePriceEl.innerHTML = price
  })
}

cycleDetails(cycle1El, "eFB01", "img/cycle1.png", "$1250")
cycleDetails(cycle2El, "eR02 Apex", "img/cycle2.png", "$1020")
cycleDetails(cycle3El, "eM02 FS Performance 29", "img/cycle3.png", "$1155")