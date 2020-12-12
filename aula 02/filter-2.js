//exemplo de arrays: 

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

];

const newPets = pets.filter((pets) => {
    return pets.age < 21;
});
console.log(newPets);