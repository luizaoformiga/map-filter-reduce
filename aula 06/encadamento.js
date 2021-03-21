const totalweight = pets.reduce((total, pet) => {
    return total + pet.weight;
}, 0)

console.log(totalweight);

const dogs = pets.filter((pet) => {
    return pet.type === 'dog';
})

console.log(dogs);