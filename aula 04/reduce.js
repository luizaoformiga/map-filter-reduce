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
    console.log(`total: ${total}`);
    console.log(`animals: ${animals.name}`);

    return total + animals.weight;
}, 0)

console.log(totalweight);