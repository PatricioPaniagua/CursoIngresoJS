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


function comenzar()
{	//Genero el número RANDOM entre 1 y 100
	var numeroSecreto; 
	 numeroSecreto = Math.floor(Math.random() * (100 - 1) + 1);
	console.log(numeroSecreto);

}

function verificar()
{	var numeroSecreto; 
	var contadorIntentos = 1;
	var num;
	num = document.getElementById("numero").value;
	document.getElementById("intentos").value = contadorIntentos;
	while(document.getElementById("numero").value != numeroSecreto)
		{
			contadorIntentos++;
			break; 
		}

	if(num == numeroSecreto)
		{
			case 1:
					alert("Usted es un psíquico");
					break;
			case 2:
					alert("Excelente precepcion");
					break;
			case 3:
					alert("Esto es pura suerte");
					break;
			case 4:
					alert("Excelente tecnica");
					break;
			case 5:
					alert("Usted esta en la meda");
					break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
					alert("Falta tecnica");
					break;
			default:
					alert("Afortunado en el amor");
					break;

		}
}