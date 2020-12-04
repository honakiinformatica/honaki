'use strict'

var nombre = document.getElementById('nombre')

var apellido = document.getElementById('apellido')

var email = document.getElementById('correo')

var telefono = document.getElementById('telefono')

function validaNombre(){
	if(nombre.value == ''){
		nombre.setCustomValidity('Debes completar con tu nombre')
		nombre.style.background = '#ad2424';
	}else{
		nombre.setCustomValidity('')
		nombre.style.background = white;
	}
}

function validaApellido(){
	if(apellido.value == ''){
		apellido.setCustomValidity('Debes completar con tu apellido')
		apellido.style.background = '#ad2424';
	}else{
		apellido.setCustomValidity('')
		apellido.style.background = white;
	}
}

function validaCorreo(){

	if(email.value == ''){
		email.setCustomValidity('Por favor verifica de escribir bien tu email, debe contener un @ y un punto')
		email.style.background = '#ad2424';
	}else{
		email.setCustomValidity('')
		email.style.background = white;
	}
}

function validaTelefono(){
	if(telefono.value == '' && isNaN(telefono)){
		telefono.setCustomValidity('El telefono debe contener 10 números')
		telefono.style.background = '#ad2424';
	}else{
		telefono.setCustomValidity('')
		telefono.style.background = white;
	}
}

function validacionGeneral(){
	nombre.addEventListener('submit', validaNombre)
	apellido.addEventListener('submit', validaApellido)
	email.addEventListener('submit',validaCorreo)
	telefono.addEventListener('submit', validaTelefono)
	validaNombre()
	validaApellido()
	validaCorreo()
	validaTelefono()

}

window.addEventListener('load', validacionGeneral)




