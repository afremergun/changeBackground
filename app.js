const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black", "green", "yellow", "red", "#03a1fc", "#df03fc", "#fc9403", "#62fc03"]

button.addEventListener('click', changeBackground);

function changeBackground() {
    const rastgeleSayi = Math.floor(Math.random() * colors.length);
    const secilenRenk = colors[rastgeleSayi];
    console.log(rastgeleSayi, secilenRenk);
    body.style.backgroundColor = secilenRenk;
}