export function BOATARDE(Nome) {
    return Nome + ` Boa Tarde`;
}

console.log(BOATARDE("Nicolas"));




export function dobro(numero) {
    return numero * 2;
}

console.log(dobro("99"));




export function ehpar(numero) {
    if (numero %2 === 0){
        return true
    }
    else {         
        return false
    }
}

console.log(ehpar("98"));




export function maior (a, b) {
    if (a < b) {
        return b   
        
    }
    else {
        return a
    }
}
console.log (maior(21, 233))