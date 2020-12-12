const animals = [

    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 0.01
    },
    {
        type: 'cat',
        name: 'lang',
        age: 3,
        weight: 20
    },
    {
        type: 'dog',
        name: 'max',
        age: 6,
        weight: 30
    },
    {
        type: 'elephant',
        name: 'orchid',
        age: 18,
        weight: 300
    }
]

const totalweight = animals.reduce((total, animals) => {
    return {
        totalAge: total.totalAge + animals.age,
        totalweight: total.totalweight + animals.weight
    }
}, { totalAge: 0, totalweight: 0 });

console.log(totalweight);

//vai compilar total de idade dos animais e  total de peso dos animais.


const total = animals.reduce((total, animals) => {
    return total + animals;
}, 0);

console.log(total);