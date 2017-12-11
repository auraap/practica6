function esprimer(numero) {
    // numero = 10

    // dividir des de 2 fins a 9
    

for (var divisor=2; divisor<numero; divisor++) {
    if (numero%divisor==0) {
        return false;
    }
} 
return true;
}
