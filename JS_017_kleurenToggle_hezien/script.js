// // toggle slider

// //  slider in
const slideInNav = () => {
    let getSidebar = document.querySelector(".aside-nav")
    getSidebar.style.left = "0";
};
// attacht to 
const attachSlideInMenu = () => {
    const toggleMenuBtn = document.querySelector(".wrapper-for-slide-out");
    toggleMenuBtn.addEventListener("mouseover", () => slideInNav());
}
attachSlideInMenu();

// // slider out
const slideOutNav = () => {
    let getSidebar = document.querySelector(".aside-nav")
    getSidebar.style.left = "-140px";
};
// attacht to 
const attachSlideOutMenu = () => {
    const toggleMenuBtn = document.querySelector(".wrapper-for-slide-out");
    toggleMenuBtn.addEventListener("mouseout", () => slideOutNav());
}
attachSlideOutMenu()
// 
const attachSlideOutMenuOnClick = () => {
    const toggleMenuBtn = document.querySelector(".wrapper-for-slide-out");
    toggleMenuBtn.addEventListener("click", () => slideOutNav());
}
attachSlideOutMenuOnClick()

// change to white 
const changeClassToWhiteBackground = () => document.body.style.backgroundColor = "white";

const attachEventToChangeColorBtnWhite = () => {
    const btnWhite = document.getElementById("btn-white");
    btnWhite.addEventListener("click", () => changeClassToWhiteBackground());
}
attachEventToChangeColorBtnWhite()

// change to red
const changeClassToRedBackground = () => document.body.style.backgroundColor = "red";

const attachEventToChangeColorBtnRed = () => {
    const btnRed = document.getElementById("btn-red");
    btnRed.addEventListener("click", () => changeClassToRedBackground());
}
attachEventToChangeColorBtnRed()

// change to orange
const changeClassToOrangeBackground = () => document.body.style.backgroundColor = "orange";

const attachEventToChangeColorBtnOrange = () => {
    const btnOrange = document.getElementById("btn-orange");
    btnOrange.addEventListener("click", () => changeClassToOrangeBackground());
}
attachEventToChangeColorBtnOrange()

// change to Purple
const changeClassToPurpleBackground = () => document.body.style.backgroundColor = "purple";

const attachEventToChangeColorBtnPurple = () => {
    const btnPurple = document.getElementById("btn-purple");
    btnPurple.addEventListener("click", () => changeClassToPurpleBackground());
}
attachEventToChangeColorBtnPurple()

// change to Green
const changeClassToGreenBackground = () => document.body.style.backgroundColor = "green";

const attachEventToChangeColorBtnGreen = () => {
    const btnGreen = document.getElementById("btn-green");
    btnGreen.addEventListener("click", () => changeClassToGreenBackground());
}
attachEventToChangeColorBtnGreen()
