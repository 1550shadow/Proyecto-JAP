document.addEventListener("DOMContentLoaded", function(){

    var url_string = window.location.href;
    var url = new URL(url_string);
    var indice = url.searchParams.get("indice");
    indice = parseInt(indice);
 var juegoArr = '[{"titulo" : "NieR Automata", "portada": "IMG/nier_automata_box.jpg", "trailer" : "https://www.youtube.com/embed/3V13gdh-WhM?autoplay=1", "imgone" : "IMG/img1.jpg", "imgtwo" : "IMG/img2.jpg", "imgthree" : "IMG/img3.jpg","imgfour" : "IMG/img4.jpg","imgfive" : "IMG/img5.jpg", "descripcion" : "NieR: Automata narra la historia de los androides 2B, 9S y A2, que luchan para recuperar el mundo distópico dirigido por las máquinas que han invadido unas poderosas formas de vida mecánicas. Unos alienígenas mecanizados han invadido la Tierra, obligando a la humanidad a abandonarla. En un último intento por recuperar el planeta, la resistencia humana envía un ejército de soldados androides para acabar con los invasores. La guerra entre las máquinas y los androides se vuelve cada vez más encarnizada. Una guerra que pronto pondrá al descubierto la verdad sobre este mundo...", "SO" : "Sistema operativo: Windows 7 64-bit / Windows 8.1 64-bit / Windows 10 64-bit (no hay soporte para SOs de 32-bit)", "CPU" : "CPU: Intel Core i3 2100 o mayor, AMD A8-6500 o mayor", "RAM" : "RAM: 4GB", "DD" : "Espacio en Disco Duro: 50GB", "video" : "Tarjeta Gráfica: NVIDIA GeForce GTX 770 VRAM 2GB o mayor / AMD Radeon R9 270X VRAM 2GB o mayor", "otros" : "Otros: Ratón, Teclado, Gamepad (sólo XInput)", "categorias" : "Acción, ciencia ficción, aventuras, buena historia, shooter, hack and slash, ", "valoracion" : "8,6/10", "precio" : "$U1.119", "comprar" : "comprar.html?indice=0"},' + 
                '{"titulo" : "CS: Global Offensive", "portada": "IMG/csgo_box.jpg", "trailer" : "https://www.youtube.com/embed/edYCtaNueQY?autoplay=1", "imgone" : "img/img1_csgo.jpg", "imgtwo" : "img/img2_csgo.jpg", "imgthree" : "img/img3_csgo.jpg", "imgfour" : "img/img4_csgo.jpg", "imgfive" : "img/img5_csgo.jpg", "descripcion" : "Counter-Strike: Global Offensive (CS: GO) ampliará la jugabilidad de acción por equipos que fue pionera en su lanzamiento hace 12 años. CS: GO incluirá nuevos mapas, personajes y armas y ofrecerá versiones actualizadas del contenido clásico de CS (de_dust2, etc.). Además, CS: GO introducirá nuevos modos de juego, matchmaking, marcadores y mucho más.", "SO" : "Sistema operativo: Windows 7/Vista/XP", "CPU" : "CPU: Intel Core 2 Duo E6600 o AMD Phenom X3 8750 Procesador o superior", "RAM" : "RAM: 2GB", "DD" : "Espacio en Disco Duro: 8GB", "video" : "Tarjeta gráfica: 256MB o más", "otros" : "Otros: Teclado y mouse", "categorias" : "Shooter, multijugador, online, ", "valoracion" : "8.37/10", "precio" : "$329", "comprar" : "comprar.html?indice=1"},' +
                '{"titulo" : "Crash N Sane Trilogy", "portada": "img/crash_box.jpg", "trailer" : "https://www.youtube.com/embed/4fbO2-egZ3U?autoplay=1", "imgone" : "img/img1_crash.jpg", "imgtwo" : "img/img2_crash.jpg", "imgthree" : "img/img3_crash.jpg", "imgfour" : "img/img4_crash.jpg", "imgfive" : "img/img5_crash.jpg", "descripcion" : "¡Vuelve Crash Bandicoot™, tu marsupial favorito! Mejorado, embelesado y listo para bailar con la colección de juegos La trilogía. Ahora puedes disfrutar de Crash Bandicoot como nunca antes. Gira, salta, rompe, enfréntate a los épicos desafíos y vive las aventuras de los tres juegos con los que empezó todo: Crash Bandicoot™, Crash Bandicoot™ 2: Cortex Strikes Back y Crash Bandicoot™ 3: Warped. ¡Vuelve a vivir tus momentos favoritos de Crash con gráficos remasterizados y prepárate para disfrutar a tope!", "SO" : "Sistema operativo: Windows 7 de 64 bits", "CPU" : "CPU: Core i5 750 o Phenom II X4 965 (CPU de cuatro núcleos o cuatro hilos)", "RAM" : "RAM: 8GB", "DD" : "Espacio en Disco Duro: 32GB o más", "video" : "Tarjeta gráfica: NVIDIA GeForce GTX 660 2GB/ AMD Radeon HD 7850 2GB", "otros" : "Otros: Ratón, Teclado, Gamepad (sólo XInput)", "categorias" : "Singleplayer, plataformas, aventuras, remake, clásicos, ", "valoracion" : "9.5/10", "precio" : "$1.169", "comprar" : "comprar.html?indice=2"}]'


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

var comprar = document.getElementById("comprar");
comprar.setAttribute("href", juegoArr[indice].comprar);

var titulo = document.getElementById("title");
titulo.innerHTML = juegoArr[indice].titulo;
});
