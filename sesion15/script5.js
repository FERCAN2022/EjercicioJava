let dato = prompt("Ingrese el numero") 
let r = 1;
for(let i = dato; i>0; i--){
    r *= i;
}
alert(` el factorial de ${dato}! es ${r}  `)