const btn = document.querySelector("#btn");
const showcase = document.querySelector("#showcase");
const colorInfo = document.querySelector("#info");

function randomColor() {
    console.log("btn clicked");

    const random1 = Math.floor((Math.random() * 255) + 1);
    const random2 = Math.floor((Math.random() * 255) + 1);
    const random3 = Math.floor((Math.random() * 255) + 1);

    showcase.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
    colorInfo.textContent = `background color : rgb(${random1}, ${random2}, ${random3})`;

}

btn.addEventListener("click", randomColor);