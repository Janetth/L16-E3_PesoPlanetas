var element = document.querySelector(".form-signup");
    element.addEventListener("submit", function(event) {
    event.preventDefault();
    calcularForm();
});
function calcularForm(){
   var form1 = document.getElementsByName("form1")[0];
   var masa = .value;
   var masa =parseFloat(masa)/9.8;
   if(isNaN(masa)){
     alert("Ingrese un valor numérico");
     document.getElementById('peso')

     return false;
   }
   function calPeso(a,b){
  		var pesoPlaneta = a * b;
  		return pesoPlaneta.toFixed(2);
	 }
   alert("\n Tu peso en otros mundos del Sistema Solar :\n"
           + "\n Tu peso en Mercurio es : " + calPeso(masa,3.7)+ " Kg."
           + "\n Tu peso en Venus es : " + calPeso(masa,8.87)+ " Kg."
           + "\n Tu peso en Marte es : " + calPeso(masa,3.71)+ " Kg."
           + "\n Tu peso en Jupiter es : " + calPeso(masa,23.12)+ " Kg."
           + "\n Tu peso en Saturno es : " + calPeso(masa,8.69)+ " Kg."
           + "\n Tu peso en Urano es : " + calPeso(masa,8.69)+ " Kg."
           + "\n Tu peso en Neptuno es : " + calPeso(masa,11)+ " Kg.");
   form1.reset();
   return false;
 }
