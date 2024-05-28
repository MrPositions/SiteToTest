let sideImg = document.getElementById("sideImg")
let allSections = document.getElementsByTagName("section")

for (let section of allSections) {
section.addEventListener("mouseenter", changeImg)
}

function changeImg() {
let imgLink = this.getAttribute("data-img")
sideImg.setAttribute("src", imgLink)
}
document.getElementById('menu-icon').addEventListener('click', function() {
      var menu = document.getElementById('menu');
      if (menu.style.display === 'none') {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
});