const pets = [
    {
      name: 'Rex',
      type: 'dalmata',
      age: 12
    },
    {
      name: 'Thor',
      type: 'bace',
      age: 11
    },
    {
      name: 'Lucy',
      type: 'vira-lata',
      age: 23
    }
]

const newPets = pets.filter(pets => pets.age < 21);

console.log(newPets);