
const cp			= document.querySelector('#cpostal');
const province		= document.querySelector('#localidad');
const valoracionIn  = document.querySelector('#valoracionIn');
const paisIn        = document.querySelector('#paisIn');
const controlIn     = document.querySelector('#controlIn');
const entidadIn     = document.querySelector('#entidadIn');
const sucursalIn    = document.querySelector('#sucursalIn');
const dcIn          = document.querySelector('#dcIn');
const cuentaIn      = document.querySelector('#cuentaIn');
const dateIn        = document.querySelector('#dateIn').value;
const valoracionBtn = document.querySelector('#valoracionBtn');
const dateBtn       = document.querySelector('#dateBtn');
const cuentaBtn     = document.querySelector('#cuentaBtn');
const submitBtn    = document.querySelector('#submit');
const popup 		= document.querySelector('.msg');
const popupError 	= document.querySelector('.error');
const popupCperror 	= document.querySelector('.cp-error');
const popupCorrect	= document.querySelector('.correct');
const closeBtn 		= document.querySelector('.popup-close');
const days = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
];
const numberDay = new Date(dateIn).getDay();
const nameDay = days[numberDay];

valoracionBtn.addEventListener('click',function(){
	alert(`has valorado con ${valoracionIn.value} puntos.`)
})


cuentaBtn.addEventListener('click', function(){
	if(controlIn.value === '' || entidadIn.value === '' || sucursalIn.value === '' || dcIn.value === '' || cuentaIn.value === ''){
		alert(`Rellene los campos indicados`);
	}else{
		alert(`Le informamos de que el numero de cuenta es: ${paisIn.value}-${controlIn.value}-${entidadIn.value}-${sucursalIn.value}-${dcIn.value}-${cuentaIn.value}`)
}})

dateBtn.addEventListener('click', function(){
	alert(`El dia de la realización de la encuesta es un ${nameDay}`);
})

submitBtn.addEventListener('click', function(){
	validateCP();
})

closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
});

function validateCP(){
	var valor = cp.value;
    var patron = /^\d{5}$/;
    // Eliminamos la clase error asignada al elemento CP.
	let cp_new =  darProvincia(valor);
	if ( province.value === cp_new){
		popupCorrect.classList.remove('hidden');
	}
	else {
		popupError.classList.remove('hidden');
		return;
	}
    if (patron.test(valor) && (!isNaN(valor))){
        cp.className="correcto";
        return true;
    } else{
        //Situamos el foco en el campo cpostal y le asignamos la clase error.
		cp.focus();
		popupError.classList.add('hidden');
		popupCperror.classList.remove('hidden');
		cp.className="error-cp";  
        return false;
    }
	

}

function darProvincia(cp){
    var cp_provincias = {
      1: "\u00C1lava", 2: "Albacete", 3: "Alicante", 4: "Almer\u00EDa", 5: "\u00C1vila",
      6: "Badajoz", 7: "Baleares", 08: "Barcelona", 09: "Burgos", 10: "C\u00E1ceres",
      11: "C\u00E1diz", 12: "Castell\u00F3n", 13: "Ciudad Real", 14: "C\u00F3rdoba", 15: "Coruña",
      16: "Cuenca", 17: "Gerona", 18: "Granada", 19: "Guadalajara", 20: "Guip\u00FAzcoa",
      21: "Huelva", 22: "Huesca", 23: "Ja\u00E9n", 24: "Le\u00F3n", 25: "L\u00E9rida",
      26: "La Rioja", 27: "Lugo", 28: "Madrid", 29: "M\u00E1laga", 30: "Murcia",
      31: "Navarra", 32: "Orense", 33: "Asturias", 34: "Palencia", 35: "Las Palmas",
      36: "Pontevedra", 37: "Salamanca", 38: "Santa Cruz de Tenerife", 39: "Cantabria", 40: "Segovia",
      41: "Sevilla", 42: "Soria", 43: "Tarragona", 44: "Teruel", 45: "Toledo",
      46: "Valencia", 47: "Valladolid", 48: "Vizcaya", 49: "Zamora", 50: "Zaragoza",
      51: "Ceuta", 52: "Melilla"
    };
    if(cp.length == 5 && cp <= 52999 && cp >= 1000)
      return cp_provincias[parseInt(cp.substring(0,2))];
}


 
