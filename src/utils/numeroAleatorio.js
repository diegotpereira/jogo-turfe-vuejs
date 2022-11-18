export function numeroAleatorio(primeiroNumero, ultimoNumero) {

    return parseFloat((Math.random() * (ultimoNumero - primeiroNumero) + primeiroNumero).toFixed(2));
}