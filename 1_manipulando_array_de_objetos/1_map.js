// Função map

const list = [
  {
    name: "Pedro",
    age: 29,
  },
  {
    name: "Adrielle",
    age: 25,
  },
  {
    name: "Teste 1",
    age: 18,
  },
  {
    name: "Teste 2",
    age: 14,
  },
  {
    name: "Teste 3",
    age: 88,
  },
  {
    name: "Teste 4",
    age: 52,
  },
  {
    name: "Teste 5 ",
    age: 69,
  },
];

 const convertObjet = (object) => {
   return {
    ...object,
    idade: `${object.name} ${object.age}`
   }
 }

console.log(list.map(convertObjet))