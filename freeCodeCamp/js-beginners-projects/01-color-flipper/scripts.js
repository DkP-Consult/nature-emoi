const colors = ['#3366ff', '#ff33cc', '#999966', '#009999', '#ccff66'];

const btn = document.getElementById("btn");

// const color = document.querySelector(".colorref");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    colorref.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};