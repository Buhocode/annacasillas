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