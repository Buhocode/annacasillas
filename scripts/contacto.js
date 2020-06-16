var navbar = document.querySelector('nav');
navbar.classList.add('nav-transparent');
window.onscroll = function () {

    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        navbar.classList.add('nav-dark');
        navbar.classList.remove('nav-transparent')

    } else {
        navbar.classList.remove('nav-dark');
        navbar.classList.add('nav-transparent')
    }
}
//navbar
var navRight = document.getElementById('nav-right');
var navItems = document.getElementsByClassName('nav-item');

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].style.display = 'block';
    }
    navRight.style.width = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].style.display = 'none';
    }
    navRight.style.width = "0";
}