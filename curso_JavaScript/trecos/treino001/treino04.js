var nota = 27;

if (nota>= 0 && nota<=19) {
    console.log(`Sua nota foi ${nota} --- F`)
}
else if(nota>= 20 && nota<=39){
    console.log(`Sua nota foi ${nota} --- D`)
}
else if(nota>= 40 && nota<=59){
    console.log(`Sua nota foi ${nota} --- C`)
}
else if(nota>= 60 && nota<=79){
    console.log(`Sua nota foi ${nota} --- B`)
} 
else{
    console.log(`Sua nota foi ${nota} --- A`)
}