let nombre = prompt("ingresar el nombre del trabajdor")
let sueldo = +prompt("ingresar el monto de su sueldo")
let hijos  = +prompt("ingrese la cantidad de hijos ")


if(hijos>=1){

    let asignacion = (sueldo * 7/100)
    alert(` su bonificacion es  ${(sueldo * 7/100)}`)

    alert(` el importe total es  ${(sueldo + asignacion)}`)
}

else if(hijos <= 0){
    alert("No tiene Hijos por lo cual no recibe bonificacion:C")
}

