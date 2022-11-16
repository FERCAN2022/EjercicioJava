
let dato = prompt("Ingrese el numero") 
let r = 1;
for(let i = dato; i>0; i--){
    r *= i;
}
console.log(r);

alert(` elfactorial de ${dato}! es ${r}  `)