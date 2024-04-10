const funcionario = {nome: 'maria', salario: 1999}
//spread
const clone = {ativo: true, ...funcionario}
console.log(clone)