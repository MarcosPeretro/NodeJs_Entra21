"use strict";
let nome = "Marcos";
let numero = 10;
let numeroDecimal = 100.5;
let booleano = true;
//arrays
let tipoArray = [1, 2, 3];
let arrayString = ["A", "B", "C"];
//tuplas - array com quantidade e tipos fixos no elemento
let tuplas = ["Diego", 40];
//enum - conjunto de alores nomeados
var Status;
(function (Status) {
    Status[Status["Ativo"] = 0] = "Ativo";
    Status[Status["Inativo"] = 1] = "Inativo";
    Status[Status["Pendente"] = 2] = "Pendente";
})(Status || (Status = {}));
let s = Status.Ativo;
var Pedido;
(function (Pedido) {
    Pedido[Pedido["Pendente"] = 1] = "Pendente";
    Pedido[Pedido["Recebido"] = 2] = "Recebido";
    Pedido[Pedido["Cancelado"] = 9] = "Cancelado";
})(Pedido || (Pedido = {}));
let valor = "string"; //desativa a verificação de tipo
valor = 100;
let outroValor = "mensagem"; //tipo de segurança que preisa ser validqado antes de usar
if (typeof outroValor === "string") {
    console.log(outroValor.toUpperCase());
}
//tipo void para funções
function log() {
    console.log("Olá mundo");
}
let arrowFunction = () => {
    console.log("Ola mundo");
};
//funções com tipos definidos
let soma = (v1, v2) => {
    return v1 + v2;
};
soma(10, 10);
//objetos tipados
let pessoa = {
    nome: "Marcos",
    idade: 40
};
//union types - permite unir tipos diferentes a um mesmo elemento
function imprimir(valor) {
    console.log(valor);
}
let emp = {
    nome: "Diego",
    salario: 40000
};
//generic types - permite criar funções, classes ou interfaces genéricas que funcionam com diferentes tipos
function identidade(valor) {
    return valor;
}
let chamandoString = identidade("teste de chamada");
let chamandoNumerico = identidade(100);
//classes
class Carro {
    constructor(modelo) {
        this.modelo = modelo;
    }
    businar() {
        console.log("Bi Bi");
    }
}
//instanciando o objeto
let fusca = new Carro("fusca");
fusca.businar();
