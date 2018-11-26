document.addEventListener("DOMContentLoaded", function(){

 var subtotal= 0;
 var cantidad = 0;
 var costoEnvio = 0;
 var total = 0;

 var url_string = window.location.href;
 var url = new URL(url_string);
 var indice = url.searchParams.get("indice");
 indice = parseInt(indice);
 
 if (indice == 0){
    var precio = 1119;
 }
 if (indice == 1){
    var precio = 329;
 }
 if (indice == 2){
    var precio = 1169;
 }

 var campoCantidad = document.getElementById("cantidad");
 var parrafoSubtotal = document.getElementById("subtotal");
 var parrafoImpuestos = document.getElementById("impuestos");
 var total = document.getElementById("total");
 var tipoFisico = document.getElementById("fisico");
 var tipoDigital = document.getElementById("digital");
 var envioComun = document.getElementById("comun");
 var envioExpress = document.getElementById("express");
 var envioPremium = document.getElementById("premium");
 var envio = document.getElementById("tipo-envio");
 var totalEnvio = document.getElementById("total-envio");


 precioJuego.innerHTML = precio;

function actualizarCostos(){
    subtotal = cantidad * precio;
    parrafoSubtotal.innerHTML = subtotal.toFixed(2); 
    totalEnvio.innerHTML = costoEnvio.toFixed(2);
    parrafoImpuestos.innerHTML = subtotal * 0.22;
    total.innerHTML = (subtotal * 0.22 + costoEnvio + subtotal).toFixed(2);
}

document.addEventListener("change", function(){
   if(tipoDigital.checked == true){
       envio.style.display = "none";
       envioComun.checked = false;
       envioExpress.checked = false;
       envioPremium.checked = false;
       totalEnvio.innerHTML = 0;
   }
   if(tipoFisico.checked == true){
       envio.style.display = "block";
   }
});


 campoCantidad.addEventListener("change", function() {
     cantidad = campoCantidad.value; 
     cantidad = parseInt(cantidad);
     actualizarCostos();
});


document.addEventListener("change", function(){
    if(envioComun.checked == true){
        costoEnvio = subtotal * 0.005;
        actualizarCostos();
    }

});
document.addEventListener("change", function(){
   if(envioExpress.checked == true){
       costoEnvio = subtotal * 0.02;
       actualizarCostos();
   }
});
document.addEventListener("change", function(){
   if(envioPremium.checked == true){
       costoEnvio = subtotal * 0.05;
       actualizarCostos();
   }

});

document.addEventListener("change", function(){
    if(tipoDigital.checked == true){
        envio.style.display = "none";
        costoEnvio.innerHTML = 0;
    }
 });
});