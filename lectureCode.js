// ### Lecture de code

// Après la lecture de ce code, explique clairement ce que fait la fonction "reduce" et quel est le résultat final.

// ``` 
// [ 0, 1, 2, 3, 4 ].reduce( ( acc, curr ) => acc + curr, 10);
// 
// ``` 
// La methode reduce() applique une fonction accumulatrice qui permet de réduire un tableau à une seule valeur. 
// Elle prend deux paramètres:
// - une fonction callback dit accumulateur. Elle retourne la valeur précédemment retournée par le dernier callback. 
//   Lors du premier appel de la fonction callback elle utilise en 1er argument une valeur initiale. La valeur initiale est fournit en 2nd argument de l'appel de reduce()
//   ou en cas d'absence prend la valeur du 1er élement du tableau.
// - la valeur de l'élément courant
//
// Reduce() va réitérer sur chaque élément du tableau, de gauche à droite, afin d'additionner la valeur de l'accumulateur à la valeur de la l'élément courant.
// La valeur retournée est celle du dernier appel de la fonction callback.
// 
// [ 0, 1, 2, 3, 4 ].reduce( ( acc, curr ) => acc + curr, 10);
// Le resultat final ici est 20 car la valeur initiale fournit en second argument à l'appel de reduce() est 10.
// acc + curr 
// 10 + 0 = 10
// 10 + 1 = 11
// 11 + 2 = 13
// 13 + 3 = 16
// 16 + 4 = 20
