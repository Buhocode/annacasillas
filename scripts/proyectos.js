var photos = 15;
var grid = document.getElementsByClassName('grid');
for (var i = 1; i <= photos; i++) {
    var gridItem = document.createElement('div');
    var photo = document.createElement('img');
    photo.classList.add('grid-photo');
    gridItem.classList.add('grid-item');
    photo.src = `./img/proyectos/microuniversos/microuniverso (${i}).jpg`;
    photo.width = 300;
    gridItem.appendChild(photo);
    grid[0].appendChild(gridItem);
}

var ojos = 14;
var grid = document.getElementsByClassName('grid2');
for (var i = 1; i <= ojos; i++) {
    var gridItem = document.createElement('div');
    var photo = document.createElement('img');
    photo.classList.add('grid-photo');
    gridItem.classList.add('grid-item');
    photo.src = `./img/proyectos/ojos/ojo (${i}).jpg`;
    photo.width = 300;
    gridItem.appendChild(photo);
    grid[0].appendChild(gridItem);
}

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