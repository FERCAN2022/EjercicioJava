const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresiones = {
	fname: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	lname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	 phone:/^.{4,12}$/, // 4 a 12 digitos.
     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	
}

const campos = {
	fname: false,
	lname: false,
	phone: false,
	email: false,
	
}
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "fname":
			validarCampo(expresiones.fname, e.target, 'fname');
		break;
		case "lname":
			validarCampo(expresiones.lname, e.target, 'lname');
		break;
		case "phone":
			validarCampo(expresiones.phone, e.target, 'phone');
			validarPassword2();
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'correo');
		break;
		
	}
}