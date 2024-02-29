// foreach

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

// for (let index = 0; index < list.length; index++) {
//   console.log(list[index]);
// }

let somaIdade = 0

list.forEach((obj) => {
  somaIdade += obj.age
});

console.log(somaIdade)