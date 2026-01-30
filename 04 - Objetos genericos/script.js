const alumnos = JSON.parse(alumnosJSON);

document.write("<table border='1'>");
document.write("<tr><th>Nombre</th><th>Apellidos</th><th>DNI</th></tr>");

for (let i = 0; i < alumnos.length; i++) {
  document.write("<tr>");
  document.write("<td>" + alumnos[i].nombre + "</td>");
  document.write("<td>" + alumnos[i].apellidos + "</td>");
  document.write("<td>" + alumnos[i].dni + "</td>");
  document.write("</tr>");
}

document.write("</table>");
