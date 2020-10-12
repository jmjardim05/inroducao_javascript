/*
 * Funções 
 * Instrutor Rafael Galleani
 *
 */
 
 console.log("************* Aula2 *************");
 console.log("*********************************");

//calcular(): realiza a operação matemática passado para operacao, entre n1 e n2
function calcular(n1, n2, operacao)
{
	switch (operacao)
	{
		case "+": return n1 + n2;
		case "-": return n1 - n2;
		case "*": return n1 * n2;
		case "/": return n1 / n2;
		/*case "^": {
			        var p = 1;
					for (var i = 0; i < n2; i++)
					{
						p = p * n1;
					}
					return p;
				}*/ 
		case "^": return Math.pow(n1, n2); //classe Math, pow() reorna n1 elevado à n2
		default: return n1 + n2;		
	}
}

var n1 = 2;
var n2 = 3;

//adição
console.log("Soma " + n1 + " + " + n2 + " = " + calcular(n1, n2, "+"));

//subtração
console.log("Subtração " + n1 + " - " + n2 + " = " + calcular(n1, n2, "-"));

//multiplicação
console.log("Multiplicação " + n1 + " x " + n2 + " = " + calcular(n1, n2, "*"));

//divisão
console.log("Divisão " + n1 + " / " + n2 + " = " + calcular(n1, n2, "/"));

//potenciação
console.log("Potenciação " + n1 + " elevado à " + n2 + " = " + calcular(n1, n2, "^"));