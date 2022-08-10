// variables para el registro

var nombre = document.getElementById("inputName");
var telefono = document.getElementById("inputPhone");
var direccion = document.getElementById("inputAddress");
var ciudad = document.getElementById("inputCity");
var correo = document.getElementById("inputEmail");
var finalizar_pedido = document.getElementById("button");

// clases para controlar errores de las variables 

var claseNombre = document.querySelector(".nombre");
var claseTelefono = document.querySelector(".telefono");
var claseDireccion = document.querySelector(".direccion");
var claseCiudad = document.querySelector(".ciudad");
var claseCorreo = document.querySelector(".email");
var claseBtnPedido = document.querySelector(".btnEnviar");

// variables expresiones regulares

var regExpnTelefono = /^[0-9]/

var regExpnEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//Funciones 

function error(elemento, mensaje = '') {
    if (mensaje != '') {
        elemento.lastElementChild.innerHTML = `<span class = "text-danger error"> ${mensaje} </span>`

    } else {
        elemento.lastElementChild.innerHTML = mensaje
    }
}

function finPedido() {

    if (nombre.value != '') {
        error(claseNombre)
        console.log(nombre.value)
    } else {
        error(claseNombre, 'Error! el nombre no puede estar vacio')
        
    }

    if (regExpnTelefono.test(telefono.value)) {
        error(claseTelefono)
        console.log(telefono.value)
    } else {
        error(claseTelefono, 'El número de telefono debe ser un numero y no debe estar vacio')
    }

    if (direccion.value != '') {
        error(claseDireccion)
        console.log(direccion)
    } else {
        error(claseDireccion, 'Error la dirección no puede estar vacia')
    }

    if (ciudad.value != '') {
        error(claseCiudad)
        console.log(ciudad)
    } else {
        error(claseCiudad, 'La ciudad no puede estar vacia')
    }

    if (regExpnEmail.test(correo.value)) {
        error(claseCorreo)
        console.log(correo)
    } else {
        error(claseCorreo, 'el correo no es correcto o no lo ha ingresado')
    }

    var valida_formulario = !!document.querySelector(".error")
console.log(valida_formulario)

// Guardar datos en el local storage

if (valida_formulario == false) {
    localStorage.setItem('nombre', nombre.value)
    localStorage.setItem('telefono', telefono.value)
    localStorage.setItem('direccion', direccion.value)
    localStorage.setItem('ciudad', ciudad.value)
    localStorage.setItem('correo', correo.value)
}


}
 




