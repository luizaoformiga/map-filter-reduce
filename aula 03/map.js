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
        weight: 0.01
    },
    {
        type: 'dog',
        name: 'max',
        age: 6,
        weight: 0.01
    },
    {
        type: 'elephant',
        name: 'orchid',
        age: 18,
        weight: 0.01
    }
]

/*
   Map

   Retornar um novo array com a mesma quantidade de elementos que o array inicial
*/

const petNames = animals.map(animals => animals.name);

console.log(petNames);

//forEach
const forEachpets = [];

animals.forEach(animals => forEachpets.push(animals.name));

console.log(forEachpets);