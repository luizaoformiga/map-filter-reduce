const pets = [
    {
        name: 'res',
        type: 'dalmata',
        age: 12
    },
    {
        name: 'thor',
        type: 'bace',
        age: 11
    },
    {
        name: 'pretinha',
        type: 'vira-lata',
        age: 23
    }
]

const idadePadrao = numero => numero < 25;
const newPets = pets.filter(({ age }) => idadePadrao(age));
const newPets = pets.filter(pets => idadePadrao(pets.age));

console.log(newPets);