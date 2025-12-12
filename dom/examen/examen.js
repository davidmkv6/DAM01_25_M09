document.getElementById("titulo").textContent = "Título actualizado";
document.getElementById("parrafo").textContent = "Texto actualizado";

document.getElementById("foto").src = "./Captura de pantalla de 2025-12-10 10-14-22.png";
document.getElementById("descripcion").textContent = "Imagen actualizada";

const texto = document.getElementById("texto");
texto.style.color = "red";
texto.style.fontSize = "32px";

const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un párrafo añadido";

document.getElementById("contenedor").appendChild(nuevoParrafo);
