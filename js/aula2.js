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
		case "^": return Math.pow(n1, n2); //classe Math, pow() retorna n1 elevado à n2
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

/* Parte 2 - Manipulando elementos na página */

function btnClick()
{
	var elemento = document.getElementById("resultado");

	//inclui um texto interno do elemento entre as tags de abertura e fechamento
	elemento.innerText = "Soma 10 + 5 = " + calcular(10, 5, "+");

	//inclui um HTML entre as tags de abertura e fechamento do elemento
	elemento.innerHTML = "<i>Soma 10 + 5 = " + calcular(10, 5, "+") + "</i>";
}

function redirecionar()
{
	//abre em nova janela/aba
	window.open("https://www.youtube.com");

	//abre na mesma aba
	window.location.href = "https://www.youtube.com";
}

var textoAnterior = "";
function incluiTexto(elemento, texto)
{
	textoAnterior = elemento.innerHTML;
	elemento.innerHTML = texto;
}

function tiraTexto(elemento)
{
	elemento.innerHTML = textoAnterior;
}

function calcularResultado(elemento)
{
	var iptN1 = document.getElementById("iptN1");
	var iptN2 = document.getElementById("iptN2");
	var resultado = document.getElementById("resultado");

	resultado.innerHTML = "<b>Resultado: " + calcular(iptN1.nodeValue, iptN2.nodeValue, elemento.nodeValue); 
}

function criarCampos(corpo)
{
	corpo.append("<span>N1: </span>");
	corpo.append("<input type='text' id='iptN1' value='0'></input>");
	corpo.append("<span>N2: </span>");
	corpo.append("<input type='text' id='iptN2' value='0'></input>");
	corpo.append("<span>Escolha operação: </span>");
	corpo.append("<select onchange='calcularResultado(this)'> " +
		"<option value='+'>Soma</option> " +
		"<option value='-'>Subtração</option> " +
		"<option value='*'>Multiplicação</option> " +
		"<option value='/'>Divisão</option> " +
		"<option value='^'>Potenciação</option> " +
		"</select>"
	);
	corpo.append("<p id='resultado'></p>")
}