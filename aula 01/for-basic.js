//exemplo de complexidade for...

/*for (var i = 0; i < Array.length; i++) {
    if (Array.indexOF(array[i]) === i) {
        models.push(array[i]);
    }
} */

// A mesma estrutura em filter 
// simples e elegante

var uniqueProducts = array.filter(function(elem, i, array) {
    return array.indexOF(elem) === i;
});