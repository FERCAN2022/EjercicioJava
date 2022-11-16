let nombre = prompt("ingresar el nombre del alumno")
let parcial = +prompt("ingrese las notas de su examen parcial")
let final  = +prompt("ingrese las notas del examen final ")
let practicas = +prompt("ingrese el promedio de prácticas")


let promedio = (parcial + final*2 + practicas )/4
if (promedio >= 11)

{
    alert(`"Aprobado" ${nombre}      ${promedio}`)  
} 

else if(promedio <= 10){
    alert("DESAPROBADO :C")
}