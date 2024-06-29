function randomColor () {
    let num = 16777215
    let randNum = Math.floor(Math.random() * num)
    let randclr = randNum.toString(16)

    let mainPage = document.getElementsByClassName("main-page")[0];
    let colorName = document.getElementsByClassName("setColor");

    mainPage.style.backgroundColor = "#" + randclr
    colorName[0].innerText = "#" + randclr

    navigator.clipboard.writeText(randclr)

}

document.getElementsByClassName("clrBtn")[0].addEventListener("click", randomColor)