const totalweight = pets.reduce((total, pet) => {
    if (pet.type !== 'dog') return total;

    return total + pet.weight;
}, 0)

console.log(totalweight);