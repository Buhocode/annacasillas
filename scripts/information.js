'use strict';

// CONTENIDO
const pageStructure = {
    productos: [
        titulo(
            'Fotografía de producto nuevo',
            'Esta sección se concentra en la fotografía de producto o tipo comercial.'
        ),
        fotos(
            './img/productos/',
            17,
            'productos',
        ),
    ],
    retratos: [
        titulo(
            'Retratos',
            'Esta sección corresponde al tipo de retratos que hago, trabajo tanto en estudio como en locación y todo tipo de fotografía: fotografía infantil, de familia o pareja, estilo fine art…',
        ),
        apartado(
            'Niño con rayas',
            `Comencé experimentar con el genero conceptual y tomé esta fotografía en 2018. Con esta imagen quería experimenté con los objetos alrededor mío para ver cómo interactuaban con diferentes personajes. Considero esta una de mis imágenes favoritas, creo que es muy poderosa, amo la composición y el contraste entre cada capa de la imagen. Esta foto fue parte de la 19ª exhibición en la "Escuela Activa de Fotografía" campus Querétaro.`,
            './img/retratos/p13.jpg'
        ),
        fotos(
            './img/retratos/',
            13,
            'retratos'
        ),
        titulo(
            'Retratos de estudio',
            '',
        ),
        fotos(
            './img/retratos/retratos-estudio/',
            16,
            'retratos-estudio'
        ),
        titulo(
            'Autoretratos',
            'Sección dedicada a mis pequeños proyectos de autorretratos.',
        ),
        apartado(
            'Cirugía',
            'Empecé a experimentar con el genero autoral, por lo que tomé la siguiente foto llamada "Cirugía" en 2019. Esta imagen fue inspirada por cultura popular y el boom acerca del amor propio y estereotipos de la belleza. Por esto hice un auto retrato mezclado con un tipo de actuación y edición digital. Todo esto para representar cómo la gente hace lo que sea para cumplir con los estereotipos cuando en realidad no están seguros de ellos. "Cirugía" fue parte de la 21ª exhibición de fotografía en la "Escuela Activa de Fotografía" campus Querétaro.',
            './img/autoretratos/p2.jpg',
        ),
        fotos(
            './img/autoretratos/',
            9,
            'autoretratos'
        ),
        titulo(
            'Retratos Fine Art',
            'Estas imágenes fueron hechas como parte de un curso de fotografía que tomé de 2017 a 2019. Decidí explorar sentimientos de tristeza y soledad que uno puede vivir durante la infancia y mezclar esos sentimientos con el genero de arte fina. Lo que se me hace muy interesante, es la mirada en la cara de la niña porque no tiene una expresión clara, aunque tiene una mirada fuerte que confunde a la gente. colores. La composición está hecha para guiar a la audiencia por la imagen, de arriba hacia abajo. Adicionalmente, esta imagen fue parte de la 18ª exhibición en la "Escuela Activa de Fotografía" en Querétaro y en una exposición llamada "La imagen despierta. Fotografía Joven" en el "Salón de la Plástica Mexicana" en la Ciudad de México.',
        ),
        fotos(
            './img/retratos/fine-art/',
            4,
            'retratos-fine-art'
        ),
        titulo(
            'Retratos Desnudo',
            ''
        ),
        fotos(
            './img/retratos/desnudo/',
            3,
            'retratos-desnudo'
        ),
    ],
    proyectos: [
        titulo(
            'Proyectos',
            'En esta sección se encuentran los proyectos que he desarrollado en este tiempo cada uno con su temática propia.'
        ),
        titulo(
            'Microuniversos',
            'Estas fotos son de mi proyecto reciente llamado "Microuniversos". Este proyecto fue hecho en 2019, con género autoral y conceptual al cual le hice un libro. Con este proyecto, decidí explorar mis emociones en un espacio familiar, mi cuarto. Como mi cuarto es donde paso la mayoría de mi tiempo, decidí representarme a mí misma en él, igual que representar mis diferentes estados y emociones que vivo cuando estoy ahí. Son imágenes que representan diferentes emociones que tengo en mi cuarto, mi microuniverso. Las imágenes tienden a ir de obscuras a claras, me gusta verlo como un ciclo de emociones.',
        ),
        fotos(
            './img/proyectos/microuniversos/',
            15,
            'microuniversos',
        ),
        titulo(
            'Ojos',
            'Pequeño proyecto llevado a foto libro de manera física, pretende representar cada una de las miradas que se encuentran en una familia tradicional.'
        ),
        fotos(
            './img/proyectos/ojos/',
            14,
            'ojos',
        ),
    ],
    naturaleza: [
        titulo(
            'Naturaleza',
            'Fotografía de animales que he encontrado a lo largo del tiempo.'
        ),
        fotos(
            './img/naturaleza/',
            26,
            'naturaleza'
        ),
    ],
    arte_digital: [
        titulo(
            'Arte Digital',
            'En esta sección se encuentran mis mejores trabajos de correspondientes al área de animación y arte digital.',
        ),
        titulo(
            'Exlibirs',
            'Es una etiqueta o sello grabado que se estampa en el reverso de la tapa de los libros, en la cual consta el nombre del dueño o el de la biblioteca a que pertenece el libro. En ocasiones sirven como un sello personal con el cual una persona se identifica.'
        ),
        fotos(
            './img/exlibris/',
            7,
            'exlibris',
            'png',
            ['exlibris'],
        ),
    ],
};

// DATA TYPES
function titulo(titulo, subtitulo) {
    return {
        tipo: 'heading',
        titulo,
        subtitulo,
        clases: ['title-large'],
    };
};
function apartado(titulo, texto, foto) {
    return {
        tipo: 'sub-heading',
        titulo,
        subtitulo: texto,
        foto,
        clases: ['title-large'],
    };
};
function fotos(folder, cantidad, id, ending = 'jpg', clases = []) {
    return {
        tipo: 'fotos',
        basePath: folder,
        cantidad,
        id,
        ending,
        clases,
    };
};

const generateHeadingHtml = el => `
    <section class="productos ${el.clases.join(' ')}">
        <div class="productos-title">
            ${el.titulo}
        </div>
        <div class="productos-description">
            ${el.subtitulo}
        </div>
    </section>
`;

const generateSubHeadingHtml = el => `
    <section class="text">
        <div class="text-container">
            <div class="text-title">
                ${el.titulo}
            </div>
            <div class="text-description">
                ${el.subtitulo}
            </div>
        </div>
        <div class="text-container text-image" style="background-image: url(${el.foto});">
        </div>
    </section>
`;

const buildPhotoGrid = el => {
    const grid = document.querySelector(`#${el.id}`);

    for (let i = 1; i <= el.cantidad; i++) {
        let gridItem = document.createElement('div');
        let photo = document.createElement('img');
        photo.classList.add('grid-photo');
        gridItem.classList.add('grid-item', ...el.clases);
        photo.src = `${el.basePath}p${i}.${el.ending}`;
        photo.alt = `Fotografía de ${el.id} ${i}`;
        photo.width = 300;
        gridItem.appendChild(photo);
        grid.appendChild(gridItem);
    }
};

// CONSTRUIR PAGINA
const buildPage = () => {
    let page = document.querySelector('#content');
    let pageName = page.dataset.page;

    pageStructure[pageName].forEach(el => {
        let html = '';
        switch (el.tipo) {
            case 'heading':
                html = generateHeadingHtml(el);
                page.insertAdjacentHTML('beforeend', html);
                break;

            case 'sub-heading':
                html = generateSubHeadingHtml(el);
                page.insertAdjacentHTML('beforeend', html);
                break;

            case 'fotos':
                html = `<section class="grid" id="${el.id}"> </section>`;
                page.insertAdjacentHTML('beforeend', html);
                buildPhotoGrid(el);
                break;

            default:
                break;
        }
    });
}

// NAVBAR
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

// AUTOMATIC RUN
buildPage();