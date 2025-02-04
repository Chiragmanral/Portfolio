const menuBtn = document.querySelector('.menu-btn');
const mainMenuBtn = document.querySelector('.menu-btn-element');
const nav = document.querySelector('.navbar');
const menuNav = document.querySelector('.menu-navbar');
const navItems = document.querySelectorAll('.menu-navbar-item');

// let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

// Hoisting only occurs with the normal function made by using function keyword.
// Hoisting does not occurs with the arrow functions, so if you want to use functions before declaring and initializing them, then use the function keyword to make them.
// If you use arrow functions then you can't use them before declaring and initializing bcz they don't get hoisted.

function toggleMenu() {
    // if(!showMenu) {
        mainMenuBtn.classList.toggle('open');
        nav.classList.toggle('open');
        menuNav.classList.toggle('open');
        navItems.forEach((item) => {
            item.classList.toggle('open');
        });

        // showMenu = true;
    // }

    // else {
    //     mainMenuBtn.classList.remove('open');
    //     nav.classList.remove('open');
    //     menuNav.classList.remove('open');
    //     navItems.forEach((item) => {
    //         item.classList.remove('open');
    //     });

    //     showMenu = false;
    // }
}
