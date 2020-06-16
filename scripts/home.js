var mouseOver = false; // para saber si estan viendo una foto del slide
var time = 4000;
// Para actualizar si estan viendo una foto
function mouseStatus(status) {
    if (status) {
        mouseOver = status;
    } else {
        mouseOver = status;
    }
}
// Change header slide
var index = 0;
var containers = document.getElementsByClassName('header-container');
var buttons = document.getElementsByClassName('button');
function changeContainer() {
    if (!mouseOver) {
        for (var j = 0; j < containers.length; j++) {
            containers[j].style.display = 'none';
            buttons[j].classList.remove('button-active');
        }
        containers[index].style.display = 'flex';
        buttons[index].classList.add('button-active');

        if (index < containers.length - 1) {
            index++;
        } else {
            index = 0;
        }
    }
    setTimeout('changeContainer()', time);
}
function selectContainer(n) {
    index = n;
    for (var k = 0; k < containers.length; k++) {
        containers[k].style.display = 'none';
        buttons[k].classList.remove('button-active');
    }
    containers[n].style.display = 'flex';
    buttons[n].classList.add('button-active');

}
changeContainer();

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