document.addEventListener("DOMContentLoaded", function(){



 var precio = 1119;
 var subtotal= 0;

 var campoCantidad = document.getElementById("cantidad");
 var parrafoSubtotal = document.getElementById("subtotal");
 var parrafoTotal = document.getElementById("total");
 var tipoFisico = document.getElementById("fisico");
 var tipoDigital = document.getElementById("digital");
 var envioExpress = document.getElementById("express");
 var envioPremium = document.getElementById("premium");
 var totalEnvio = document.getElementById("total-envio");

 precioJuego.innerHTML = precio;

 campoCantidad.addEventListener("change", function() {
     var cantidad = campoCantidad.value; 
     cantidad = parseInt(cantidad);

     var subtotal = cantidad * precio;
     parrafoSubtotal.innerHTML = subtotal; 

     parrafoTotal.innerHTML = subtotal * 1.22;
 });

 envioExpress.addEventListener("change", function(){
    var envio = subtotal * 0.05;
    totalEnvio.innerHTML = envio;
 });


});