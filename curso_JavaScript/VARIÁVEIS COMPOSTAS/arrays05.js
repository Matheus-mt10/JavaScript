let paises=["Brasil","Jamaica","Holanda"]
let pos = 0
paises.push("Uruguay","Senegal")
paises.sort()

for(let i=0;i<paises.length;i++){
    pos++
    console.log(`País N°${pos}: ${paises[i]}`)
}

