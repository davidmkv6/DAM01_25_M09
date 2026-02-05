const productosJSON = `[
    {
      "id": "TSH01",
      "nombre": "MACACARENA",
      "descripcion": "Quan balles sense vergonya i el ritme et domina.",
      "precioBase": 19.95,
      "tallas": ["S", "M", "L", "XL"],
      "colores": ["blanco", "negro", "mostaza"],
      "imagenes": {
        "blanco": "img/MACACARENA.png",
        "negro": "img/MACACARENA_BLACK.png",
        "mostaza": "img/MACACARENA.png"
      },
      "tags": ["nuevo"]
    },
    {
      "id": "TSH02",
      "nombre": "NINETIES MODE",
      "descripcion": "Un homenatge pixelat als anys 90.",
      "precioBase": 21.50,
      "tallas": ["S", "M", "L", "XL", "XXL"],
      "colores": ["gris", "negro"],
      "imagenes": {
        "gris": "img/NINETIES.png",
        "negro": "img/NINETIES_BLACK.png"
      },
      "tags": ["retro"]
    },
    {
      "id": "TSH03",
      "nombre": "RESERVOIR INVADERS",
      "descripcion": "Quan Tarantino coneix els videojocs clàssics.",
      "precioBase": 22.90,
      "tallas": ["M", "L", "XL"],
      "colores": ["azul", "negro"],
      "imagenes": {
        "azul": "img/RESERVOIR.png",
        "negro": "img/RESERVOIR_BLACK.png"
      },
      "tags": ["edicion-especial"]
    },
    {
      "id": "TSH04",
      "nombre": "VITRUVIAN CODE",
      "descripcion": "Art, codi i proporció perfecta.",
      "precioBase": 24.00,
      "tallas": ["S", "M", "L", "XL"],
      "colores": ["blanco", "negro"],
      "imagenes": {
        "blanco": "img/VITRUVIAN.png",
        "negro": "img/VITRUVIAN_BLACK.png"
      },
      "tags": ["premium"]
    }
  ]
  `;

const productos = JSON.parse(productosJSON);

function init() {
    console.log("INIT OK");
    muestraProductos(productos);
}

function muestraProductos(listaProductos) {
    const catalogo = document.getElementById("catalogo");
    catalogo.innerHTML = "";

    listaProductos.forEach(producto => {
        const article = creaArticuloProducto(producto);
        catalogo.append(article);
    });
}

function creaArticuloProducto(producto) {
    const article = document.createElement("article");
    article.classList.add("producto");

    article.append(
        creaTag(producto.tags),
        creaImagen(producto),
        creaTitulo(producto.nombre),
        creaDescripcion(producto.descripcion),
        creaPrecio(producto.precioBase),
        creaSelectorTallas(producto.tallas),
        creaSelectorColores(producto),
        creaBotonComprar(producto.id)
    );

    return article;
}

function creaTitulo(nombre) {
    const h3 = document.createElement("h3");
    h3.textContent = nombre;
    return h3;
}

function creaImagen(producto) {
    const img = document.createElement("img");
    const primerColor = producto.colores[0];
    img.src = producto.imagenes[primerColor];
    img.alt = producto.nombre;
    return img;
}

function creaDescripcion(texto) {
    const p = document.createElement("p");
    p.textContent = texto;
    return p;
}

function creaPrecio(precio) {
    const p = document.createElement("p");
    p.classList.add("precio");
    p.textContent = precio.toFixed(2) + " €";
    return p;
}

function creaSelectorTallas(tallas) {
    const select = document.createElement("select");

    tallas.forEach(talla => {
        const option = document.createElement("option");
        option.value = talla;
        option.textContent = talla;
        select.append(option);
    });

    return select;
}

function creaTag(tags) {
    const span = document.createElement("span");
    span.classList.add("tag");

    span.textContent = tags[0].toUpperCase();
    span.classList.add(tags[0]);

    return span;
}

function creaSelectorColores(producto) {
    const contenedor = document.createElement("div");
    contenedor.classList.add("colores");

    const label = document.createElement("p");
    label.textContent = "Color:";
    contenedor.append(label);

    producto.colores.forEach(color => {
        const circulo = document.createElement("span");
        circulo.classList.add("color", color);

        circulo.addEventListener("click", () => {
            const img = contenedor
                .closest(".producto")
                .querySelector("img");

            if (producto.imagenes[color]) {
                img.src = producto.imagenes[color];
            }
        });

        contenedor.append(circulo);
    });

    return contenedor;
}



function creaBotonComprar(idProducto) {
    const boton = document.createElement("button");
    boton.textContent = "Añadir al carrito";

    boton.addEventListener("click", () => {
        console.log("Producto añadido:", idProducto);
    });

    return boton;
}
