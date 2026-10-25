const hamburgerBtn = document.getElementById("hamburgerbtn");
const mobileMenu =document.getElementById("mobileMenu");
const hamburgerIcon = document.getElementById("iconhamburger");
const closeIcon = document.getElementById("iconclose");

let isOpen = false;

hamburgerBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    if(isOpen) {
        mobileMenu.classList.remove("translate-x-full");
        mobileMenu.classList.add("translate-x-0");

        hamburgerBtn.classList.remove("hidden");
        closeIcon.classList.add("hidden");

        document.body.style.overflow = "hidden";
    } else {
        mobileMenu.classList.remove("translate-x-0");
        mobileMenu.classList.add("translate-x-full");

        hamburgerIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");

        document.body.style.overflow = "";
    }
})