/* 1 - Clinico Geral | 2 - Pediatria | 3 - Geriatria | 4 - Ortopedia | 5 - Urologia | 6 - Emergência | 7 - Unidade de terapia intensiva (UTI) */

 var num-day = 6 ;

 switch (num-day) {
    case 0: console.log("O dia número digitado corresponde ao Domingp")
        break;
    case 1: console.log("O dia número digitado corresponde a segunda-feira")
        break;
    case 2: console.log("O dia número digitado corresponde a terça-feira")
        break;
    case 3: console.log("O dia número digitado corresponde a quarta-feira")
        break;
    case 4: console.log("O dia número digitado corresponde a Quinta-feira");
        break;
    case 5: console.log("O dia número digitado corresponde a sexta-feira")
        break;    
    case 6: console.log("O dia número digitado corresponde a sábado")
        break;
    default:
        console.log("O número digitado não é um dia válido")
        break;
 }