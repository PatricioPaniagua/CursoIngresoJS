/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var contGano=0;
var contPerdio=0;
var contEmpato=0;
var RG;
var RE;
var RP;
function comenzar()
{
	eleccionMaquina = Math.floor(Math.random() * (3 - 1) + 1);
	eleccionMaquina = parseInt(eleccionMaquina);
	console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina)
		{
			case 1:	if(RE>=0)
						{
							RE++;
						}
					contEmpato++;
					alert("empató");
					break;
			case 2: if(RP>=0)
						{
							RP++;
						}
					contPerdio++;
					alert("perdió");
					break;
			default:  if(RG>=0)
						{
							RG++;
						}
					 contGano++;
					 alert("ganó");
		}
}//FIN DE LA FUNCIÓN
function papel()
{
	switch(eleccionMaquina)
		{
			case 1: if(RG>=0)
						{
							RG++;
						}
					contGano++;
					alert("ganó");
					break;
			case 2: if(RE>=0)
						{
							RE++;
						}
					contEmpato++;
					alert("empató");
					break;
			default: if(RP>=0)
						{
							RP++;
						}
					 contPerdio++; 
					alert("perdió");
		}

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina)
		{
			case 1: if(RP>=0)
					contPerdio++;
					alert("perdió");
					break;
			case 2: if(RG>=0)
						{
							RG++;
						}
					contGano++;
					alert("ganó");
					break;
			default: if(RE>=0)
						{
							RE++;
						}
					 contEmpato++; 
					alert("empató");
		}
}
function informar()
{
	console.log("Ganó" + contGano);
	console.log("Empató" + contEmpato);
	console.log("Perdió" + contPerdio);
	console.log("Racha ganadas" + RG);
	console.log("Racha empates" + RE);
	console.log("Racha perdidias" + RP)
}