let importe = prompt("ingresar el importe")

if (importe >= 150){
    let descuento = (importe * 12/100)

    alert(` el descuento es  ${(importe * 12/100)}`)

    alert(` el importe total es  ${(importe - descuento)}`)

}

else if(importe<= 149){
    alert("No tiene descuento:C")
}