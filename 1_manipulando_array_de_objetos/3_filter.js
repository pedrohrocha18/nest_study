//filter cria um novo array
const list = [
  {
    name: "Pedro",
    age: 29,
    exibir: true,
  },
  {
    name: "Adrielle",
    age: 25,
    exibir: false,
  },
  {
    name: "Teste 1",
    age: 18,
    exibir: true,
  },
  {
    name: "Teste 2",
    age: 14,
    exibir: true,
  },
  {
    name: "Teste 3",
    age: 88,
    exibir: false,
  },
  {
    name: "Teste 4",
    age: 52,
    exibir: false,
  },
  {
    name: "Teste 5 ",
    age: 69,
    exibir: true,
  },
];

const personFilter = (pessoa) => pessoa.age > 30;

const listFiltered = list.filter(personFilter);

console.log(listFiltered);
