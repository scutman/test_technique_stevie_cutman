// Créer une fonction javascript permettant d'obtenir le chiffre le plus proche de zéro au sein d'un tableau de valeurs
//  ex : trololo( [ 10, 7, -3, 4.5, -1.3, 579 ] ) // retourne -1.3

const closeToZero = arr => arr.sort((a, b) => Math.abs(0 - a) - Math.abs( 0 - b))[0];

console.log(closeToZero)
