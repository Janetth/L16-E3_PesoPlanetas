var element = document.querySelector(".form-signup");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  calcularForm();
});
function calcularForm(){

  var form1 = document.getElementsByName("form1")[0];
  var peso= document.getElementById("peso");
  var jp = 0;
  jp = (10 * peso.value * 2.533 ) / 10;

  var ur =0;
  ur =(10 * peso.value * 0.905 ) / 10;

  var pesMart = 0;
  pesMart = (10 * peso.value * .379 ) / 10;

 alert("\n Tu peso en Jupiter es :" + jp.toFixed(2)+ " Kg"
  + " \n Tu peso en Urano es :" + ur.toFixed(2)+ "Kg" +
  "\n Tu peso en Marte es :" + pesMart.toFixed(2));
   form1.reset();
   return false;
 }
