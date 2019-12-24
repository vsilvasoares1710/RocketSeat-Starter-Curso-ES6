"use strict";

//3.1
arr.map(function (item) {
  return item + 10;
}); //3.2

var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

mostraIdade(usuario); //3.3

var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

mostraUsuario(nome, idade);
mostraUsuario(nome); //3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};
