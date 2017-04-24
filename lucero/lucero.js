var cuerpoDocumentoL = document.getElementById('lucero');


cuerpoDocumentoL.className = "cuerpo";
cuerpoDocumentoL.id = "cuerpoL";


function primeraSeccion() {
  var encabezado = document.createElement('header');
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
  var div = document.createElement('div');
  var subtitulo = document.createElement('h2');
  var hobbies = document.createElement('h2');
  var hobbie1 = document.createElement('img');
  var hobbie2 = document.createElement('img');
  var hobbie3 = document.createElement('img');
  var parrafo = document.createElement('p');

  segundaSeccion.appendChild(div);
  div.appendChild(subtitulo);
  subtitulo.innerText = "Un poco de mi:";
  parrafo.innerText = 'Nací el 7 de mayo de 1990, en la Ciudad de Xalapa, Ver, soy la segunda de tres hermanos. Mido 1.63m, peso 58kg. Estudie la carrera de Ingenieria Química en Poza Rica, Ver. Actualmente vivó en la Ciudad de México, estoy estudiando en Laboratoria.';
  hobbies.innerText = "Hobbies";

  hobbie1.src = "assets/hobbie1.jpg";
  hobbie1.id = "hobbie1";
  hobbie1.className = "lucero";
  hobbie2.src = "assets/hobbie2.jpg";
  hobbie2.id = "hobbie2";
  hobbie2.className = "lucero";
  hobbie3.src = "assets/hobbie3.jpg";
  hobbie3.id = "hobbie3";
  hobbie3.className = "lucero";

  cuerpoDocumentoL.appendChild(segundaSeccion);
  cuerpoDocumentoL.appendChild(parrafo);
  cuerpoDocumentoL.appendChild(hobbies);
  cuerpoDocumentoL.appendChild(hobbie1);
  cuerpoDocumentoL.appendChild(hobbie2);
  cuerpoDocumentoL.appendChild(hobbie3);
}
segundaSeccion();

function piePaginaL() {
  var piePagina = document.createElement('footer');
  var salto = document.createElement('br');

  piePagina.innerText = "© Copyright. Lucero Ramos Lazaro";
  cuerpoDocumentoL.appendChild(piePagina);
}
piePaginaL();
