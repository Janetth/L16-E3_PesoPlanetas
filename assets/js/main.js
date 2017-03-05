var element = document.querySelector(".form-signup");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  calcularForm();
});
function calcularForm(){

   var form1 = document.getElementsByName("form1")[0];

   /* Escribe tú código aquí */



   alert ("Tu peso en otros planetas es:.......");
   form1.reset();
   return false;
}
