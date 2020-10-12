/*
 * Aula JavaScript - Digital Innovation One
 * Instrutor Rafael Galleani
 */

alert("é só um alert()");

var n1 = 10;
var n2 = 20;

alert("N1 = " + n1 + " N2 = " + n2);

var x = n1;
n1 = n2;
n2 = x;

alert("N1 = " + n1 + " N2 = " + n2);

//inicializa um array com elementos fixos
var lista = ["pêra", "maçã", "laranja"];

//console.log() envia msg para o console do navegador (usar para fins de debug)
console.log(lista);

//pega um item do array/lista
var fruta = lista[1];
console.log("Fruta selecionada: " + fruta);

//inclui um novo item no final da lista
var x = lista.push("uva");
console.log("Nova fruta: " + lista[x - 1]);
console.log(lista);

console.log("removendo a última fruta da lista");

//remove o último item da lista
lista.pop();
console.log(lista);

//quantidade de lelemntos na array
var qtdElementos = lista.length;
console.log("Qtde de elementos na lista: " + qtdElementos);

x = lista.push("banana");
console.log("Novo item: " + lista[x - 1]);
qtdElementos = lista.length;
console.log("Qtde de elementos na lista: " + qtdElementos);

//inverte os elementos da lista
console.log("invertendo a lista: " + lista.reverse());

//transformar em string definindo um separador
var s = lista.join(" | ");
console.log("join() : " + s);


//objetos
var objFruta = { nome: "maçã", cor: "vermelho" };
console.log(objFruta);

//pegar um atributo do objetos
console.log("A cor da fruta " + objFruta.nome + " é " + objFruta.cor);


//chama um prompt de entrada do usuário
var numero = prompt("Digite um número de 0-99");

if (numero < 0 || numero > 99)
{
	alert("Digite um número entre 0 e 99");
}
else
{
	var resto = numero % 2;
	if (resto == 0)
	{
		alert(numero + " é par");
	}
	else
	{
		alert(numero + " é ímpar");
	}
}

//laço de reptição: enquanto
console.log("while / enquanto")
var i = 1;
while (i <= 5)
{
	console.log(i);
	i++;
}

//laço for
console.log("for / para")
for (i = 1; i <= 5; i++)
{
	console.log(i);
}

//inicializa uma variável data, com a data atual
var d = new Date();
console.log(d.getFullYear()); //2020
console.log(d.getMonth() + 1); //10 (se estiver em outubro, retorna 9)

//inicializa data com ano, mês, dia 
//obs: o js conta o mês do zero (JAN) até 11 (DEZ)
var d2 = new Date(2020, 0, 1);
console.log(d2);