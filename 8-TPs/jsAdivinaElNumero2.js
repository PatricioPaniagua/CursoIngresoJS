/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos = 1;
var num;
num = document.getElementById("numero").value;
function comenzar()
{	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto = Math.floor(Math.random() * (100 - 1) + 1);
	

}

function verificar()
{	

	document.getElementById("intentos").value = contadorIntentos;
	while(document.getElementById("numero").value != numeroSecreto)
		{
			contadorIntentos++;
			break; 
		}

	if(document.getElementById("numero").value = numeroSecreto && contadorIntentos = 1)
		{
			alert("Usted es un psíquico");
		}
	else if(contadorIntentos = 2)
		{
			alert("Excelente percepción");
		}
	else if(contadorIntentos = 3)
		{
			alert("Esto es suerte");
		}
	else if(contadorIntentos = 4)
		{
			alert("Excelente técnica");
		}
	else if(contadorIntentos = 5)
		{
			alert("Usted está en la media");
		}
	else if(contadorIntentos >=6 && contadorIntentos <=10)
		{
			alert("Falta técnica");
		}
	else
		{
			alert("Afortunado en el amor!!");
		}
}