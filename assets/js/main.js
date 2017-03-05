var element = document.querySelector(".form-signup");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  calcularForm();
});
function calcularForm(){

   var form1 = document.getElementsByName("form1")[0];
   var masa = parseFloat(document.getElementById('peso').value)/9.8;
    function calculoMercurio(){
		var mercurio = masa * 3.7;
		return mercurio.toFixed(2);
	}
	function calculoJupiter(){
		var jupiter = masa * 24.79;
		return jupiter.toFixed(2);
	}
	function calculoVenus(){
		var venus = masa * 8.87;
		return venus.toFixed(2);
	}
	
  
   alert ("Tu peso en Mercurio es: " + calculoMercurio() );
   alert ("Tu peso en Jupiter es: " + calculoJupiter() );
   alert ("Tu peso en Venus es: " + calculoVenus() );
   form1.reset();
   return false;
}
