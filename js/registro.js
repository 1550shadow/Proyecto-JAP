document.addEventListener("DOMContentLoaded", function(){

   function confirmarContrasena(){

      var pass = document.getElementById("contrasena").value;
      var repetirPass = document.getElementById("repetir_contrasena").value;
   

      if(pass !== repetirPass){
         document.getElementById("repetir_contrasena").setCustomValidity("Las contraseñas no coinciden.");
      } else {
         document.getElementById("repetir_contrasena").setCustomValidity('');
      }
   }

   pass.onchange = validatePassword;
   repetirPass.onchange = validatePassword;

});



