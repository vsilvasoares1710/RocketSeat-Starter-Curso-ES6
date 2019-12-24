
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];

//2.1

const idades = usuarios.map(item => item.idade)

console.log(`As idades dos usuários são: ${idades.join(", ")}`)

//2.2

const maiores = usuarios.filter(item => item.idade > 18)

console.log(`Os usuários maiores de idade são: ${JSON.stringify(maiores)}`)

//2.3

const trabalhamNoGoogle = usuarios.find(item => item.empresa === "Google")

console.log(`Os usuários que trabalham no Google são: ${JSON.stringify(trabalhamNoGoogle)}`)

//2.4

const dobroIdade = usuarios.map(item => ({...item, idade: item.idade * 2}))
const menorQue50 = dobroIdade.filter(item => item.idade < 50)

console.log(JSON.stringify(menorQue50))