let sideImg = document.getElementById("sideImg")
let allSections = document.getElementsByTagName("section")

for (let section of allSections) {
section.addEventListener("mouseenter", changeImg)
section.addEventListener("touchstart", changeImg)
}

function changeImg() {
let imgLink = this.getAttribute("data-img")
sideImg.setAttribute("src", imgLink)
}