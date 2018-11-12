document.addEventListener("DOMContentLoaded", function(){

    var url_string = window.location.href;
    var url = new URL(url_string);
    var indice = url.searchParams.get("indice");
    indice = parseInt(indice);
 var juegoArr = '[{"titulo" : "NieR Automata", "portada": "IMG/nier_automata_box.jpg", "trailer" : "https://www.youtube.com/embed/3V13gdh-WhM?autoplay=1", "imgone" : "IMG/img1.jpg", "imgtwo" : "IMG/img2.jpg", "imgthree" : "IMG/img3.jpg","imgfour" : "IMG/img4.jpg","imgfive" : "IMG/img5.jpg", "descripcion" : "NieR: Automata narra la historia de los androides 2B, 9S y A2, que luchan para recuperar el mundo distópico dirigido por las máquinas que han invadido unas poderosas formas de vida mecánicas. Unos alienígenas mecanizados han invadido la Tierra, obligando a la humanidad a abandonarla. En un último intento por recuperar el planeta, la resistencia humana envía un ejército de soldados androides para acabar con los invasores. La guerra entre las máquinas y los androides se vuelve cada vez más encarnizada. Una guerra que pronto pondrá al descubierto la verdad sobre este mundo...", "SO" : "Sistema operativo: Windows 7 64-bit / Windows 8.1 64-bit / Windows 10 64-bit (no hay soporte para SOs de 32-bit)", "CPU" : "CPU: Intel Core i3 2100 o mayor, AMD A8-6500 o mayor", "CPU" : "CPU: Intel Core i3 2100 o mayor, AMD A8-6500 o mayor", "RAM" : "RAM: 4GB", "DD" : "Espacio en Disco Duro: 50GB", "video" : "Tarjeta Gráfica: NVIDIA GeForce GTX 770 VRAM 2GB o mayor / AMD Radeon R9 270X VRAM 2GB o mayor", "sonido" : "Tarjeta de Sonido: DirectX 11", "resolucion" : "Resolución de pantalla: 1280×720", "directx" : "DirectX: DirectX 11", "otros" : "Otros: Ratón, Teclado, Gamepad (sólo XInput)", "categorias" : "Acción, ciencia ficción, aventuras, buena historia, shooter, hack and slash, ", "valoracion" : "8,6/10", "precio" : "$U1.119"},{"titulo" : "CSGO", "portada": "IMG/csgo_box.jpg"}]'


juegoArr = JSON.parse(juegoArr);
var h2 = document.getElementById("h2");
h2.innerHTML = juegoArr[indice].titulo;


var description = document.getElementById("description");
description.innerHTML = juegoArr[indice].descripcion;

var SO = document.getElementById("SO");
SO.innerHTML = juegoArr[indice].SO;

var CPU = document.getElementById("CPU");
CPU.innerHTML = juegoArr[indice].CPU;

var RAM = document.getElementById("RAM");
RAM.innerHTML = juegoArr[indice].RAM;

var DD = document.getElementById("DD");
DD.innerHTML = juegoArr[indice].DD;

var video = document.getElementById("video");
video.innerHTML = juegoArr[indice].video;

var sonido = document.getElementById("sonido");
sonido.innerHTML = juegoArr[indice].sonido;

var resolucion = document.getElementById("resolucion");
resolucion.innerHTML = juegoArr[indice].resolucion;

var directx = document.getElementById("directx");
directx.innerHTML = juegoArr[indice].directx;

var otros = document.getElementById("otros");
otros.innerHTML = juegoArr[indice].otros;

var categorias = document.getElementById("categorias");
categorias.innerHTML = juegoArr[indice].categorias;

var valoracion = document.getElementById("valoracion");
valoracion.innerHTML = juegoArr[indice].valoracion;

var precio = document.getElementById("precio");
precio.innerHTML = juegoArr[indice].precio;

var portada = document.getElementById("portada");
portada.setAttribute("src", juegoArr[indice].portada);

var trailer = document.getElementById("trailer");
trailer.setAttribute("src", juegoArr[indice].trailer);

var imgone = document.getElementById("imgone");
imgone.setAttribute("src", juegoArr[indice].imgone);

var imgtwo = document.getElementById("imgtwo");
imgtwo.setAttribute("src", juegoArr[indice].imgtwo);

var imgthree = document.getElementById("imgthree");
imgthree.setAttribute("src", juegoArr[indice].imgthree);

var imgfour = document.getElementById("imgfour");
imgfour.setAttribute("src", juegoArr[indice].imgfour);

var imgfive = document.getElementById("imgfive");
imgfive.setAttribute("src", juegoArr[indice].imgfive);
});
