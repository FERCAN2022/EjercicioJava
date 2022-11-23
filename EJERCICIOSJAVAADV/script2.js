const root = document.getElementById("root")
const table = document.createElement("table")
root.append(table)
 
const tr = document.createElement("tr")
table.append(tr)
 
//HEADERS
 
for(const property in pokemons[0] ) {
    const th = document.createElement("th")
    th.textContent = property
    th.style.cursor = "pointer"
    th.addEventListener("click", (e) => {
        e.preventDefault()
        sortPokemons(property)
        table.innerHTML = ""
        table.append(tr)
        renderBody()
    })
    tr.append(th)
}
 
//TABLE BODY
function renderBody(){
    for(let i=0; i<pokemons.length; i++){
        const trb = document.createElement("tr")
        const values = Object.values(pokemons[i])
   
        for(let j=0; j<values.length; j++){
            const tdb = document.createElement("td")
            tdb.textContent = values[j]
            trb.append(tdb)
        }
        table.append(trb)
    }
}
 
