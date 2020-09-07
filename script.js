function move() {
    const toggleButton = document.getElementsByClassName("toggle_switch");
    const yearlyPrice = document.getElementsByClassName("yearly");
    const monthlyPrice = document.getElementsByClassName("monthly");
    const sideButton = document.getElementsByClassName("side");
    const midButton = document.getElementsByClassName("mid");

    toggleButton[0].style.backgroundImage = "linear-gradient(to left, hsl(236, 82%, 70%), hsl(236, 82%, 70%))";
    toggleButton[0].classList.toggle("active");
    sideButton[0].classList.add("blue");
    sideButton[1].classList.add("blue");
    midButton[0].classList.add("white");

    for (let i = 0; n = yearlyPrice.length, i < n; i++) {
        if (toggleButton[0].classList.contains("active")) {
            yearlyPrice[i].style.display = "block";
            monthlyPrice[i].style.display = "none";
        } else {
            yearlyPrice[i].style.display = "none";
            monthlyPrice[i].style.display = "block";
        }
    }
}


