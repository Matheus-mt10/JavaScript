let name = "Matheus"
let age = 25
let products = ["Mouse sem fio", "Teclado mecânico", "Memória Ram 8GB", "Placa de vídeo RX580"]
let productsPrice = [89.90,129.9,100.00,349.99]

genetateInvoice(name,age,products,productsPrice)

function genetateInvoice(name,age,products, productsPrice) {
    console.log(`O Comprador é: ${name}`);
    console.log(`A idade do comprador é: ${age}`);
    console.log("----------------------------------");
    console.log(`O produto  é: ${products[0]} `);
    console.log(`O valor é: ${productsPrice[0]}`);

}
