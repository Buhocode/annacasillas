# Official Portoflio Anna Casillas

## To get started:

```
npm install
npm start
```

To build production ready:

```
npm run build:css
```

Te deploy, push to master branch

## Edit website content

##### Images

Add image to a folder, and name the image with the following format:

```
p{number}.{extension}
```

Where {number} is a real integer and {extension} can be:

- .jpg
- .png
- .svg
- .jpeg

##### Content

You can edit site content for the subpages.
Look for the file `./scripts/information.js`.
In the first lines, there is the pageStructure, with nested page names (ex: productos, retratos...).
Edit the page that you would like with any of the following:

- Titulo
- Apartado
- Fotos

Titulo:

```
titulo(
    'Title',
    'description',
)
```

Apartado:

```
apartado(
    'Title',
    'text',
    'photo path' // (ex: './img/retratos/p1.jpg'),
)
```

Fotos:

```
fotos(
    'folder', // (ex: './img/folder/')
    cantidad, // (ex: 11)
    'id' // (ex: 'identificador'),
    'extension', // OPTIONAL: Default = 'jpg'
    ['clases'], // OPTIONAL: ['class1', 'class2', ... ]
)
```
