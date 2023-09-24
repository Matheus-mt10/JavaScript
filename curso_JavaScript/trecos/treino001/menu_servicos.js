/* 1 - Clinico Geral | 2 - Pediatria | 3 - Geriatria | 4 - Ortopedia | 5 - Urologia | 6 - Emergência | 7 - Unidade de terapia intensiva (UTI) */

var servico=4;

switch (servico) {
    case 1:
        console.log("1 - Clinico Geral")
        break;
    case 2:
        console.log("2 - Pediatria")
        break;
    case 3:
        console.log("3 - Geriatria")
        break;        
    case 4:
        console.log("4 - Ortopedia")
        break; 
    case 5:
        console.log("5 - Urologia")
        break; 
    case 6:
        console.log("6 - Emergência")
        break; 
    case 7:
        console.log("7 - Unidade de terapia intensiva (UTI)")
        break

    default:console.log("Serviço inválido, selecione um serviço de 1 a 7.")
        break;
}