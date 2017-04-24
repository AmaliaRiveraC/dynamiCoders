var cuerpoDocumentoL = document.getElementById('lucero');


cuerpoDocumentoL.className = "cuerpo";
cuerpoDocumentoL.id = "cuerpoL";


function primeraSeccion() {
    var encabezado= document.createElement('header');
    var titulo = document.createElement('h1');
    var imagenL = document.createElement('img');
    var regreso = document.createElement('a');

    encabezado.className = "primera";
    encabezado.id = "primeraL";
    titulo.id = "tituloL";
    titulo.innerText = "Lucero Ramos Lazaro.";
    imagenL.src = "assets/lucero.jpg";
    imagenL.className = "lucero";
    imagenL.id = "luceroL";
    regreso.href = "../index.html";
    regreso.id = "atrasL";
    regreso.innerText = "Atras";

    encabezado.appendChild(titulo);
    encabezado.appendChild(imagenL);
    encabezado.appendChild(regreso);
    cuerpoDocumentoL.appendChild(encabezado);


};
 primeraSeccion();
function segundaSeccion() {
  var segundaSeccion = document.createElement('section');
  var div= document.createElement('div');
  var subtitulo = document.createElement('h2');
  var parrafo = document.createElement('p');

  segundaSeccion.appendChild(div);
  div.appendChild(subtitulo);
  subtitulo.innerText = "Un poco de mi:";
  parrafo.innerText = 'Nací el 7 de mayo de 1990, en la Ciudad de Xalapa, Ver, soy la segunda de tres hermanos. Estudie la carrera de Ingenieria Quimica en Poza Rica, Ver. Actualmente vivó en la Ciudad de México, estudiando en Laboratoria.'
  cuerpoDocumentoL.appendChild(segundaSeccion);
  cuerpoDocumentoL.appendChild(parrafo);
}
segundaSeccion();
function piePaginaL() {
  var piePagina = document.createElement('footer');
  var salto = document.createElement('br');

  piePagina.innerText = "© Copyright. Lucero Ramos Lazaro";
  cuerpoDocumentoL.appendChild(piePagina);
}
piePaginaL();



//cuerpoDocumentoL.appendChild(contenedorL);
// contenedorL.appendChild(spanL);
// contenedorL.className = "contenedorL";
// contenedorL.id = "descripcion";
// spanL.innerText ="Lucero Ramos Lazaro nacio en Xalapa, Veracruz, es la segunda de tres hijos, es de complexión delgada, mide 1.63 m, le gusta comer tacos al pastor' y la comida tipica de Mexico.";
//
//   cuerpoDocumentoL.appendChild(contenedorL);
//   contenedorL.appendChild(spanL);
//   spanL.innerText = " prueba"
//
//   cuerpoDocumentoL.appendChild(piePaginaL);
//   piePaginaL.innerText = "© Copyright. /n Lucero Ramos Lazaro"
