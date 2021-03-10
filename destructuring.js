const numerosPares = [2,4,6]
const numerosImpares = [1,3,5]

const numeros = [...numerosPares, ...numerosImpares]
console.log(numeros)

const [numero1, numero2, ...outrosNumeros] = [1,2,3,4,5,6]
console.log(numero1, numero2, outrosNumeros)

const [nome1 = 'Guilherme'] = [1]
console.log(nome1)
const [nome2 = 'Guilherme'] = []
console.log(nome2)

const pessoa = {
    nome: 'Guilherme',
    idade: 27
}

const pessoaComTelefone = {
    ...pessoa,
    telefone: 312312312
}

console.log(pessoa, pessoaComTelefone)

const { nome } = pessoa
console.log(nome)

function imprimeDados({nome, idade}){
    console.log(nome,idade)
}

imprimeDados(pessoa)