function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

switch(mesDelAño)
	{
		case "Julio":
		case "Agosto": 
				alert("Abrigate que hace frío");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
				alert("Ya pasamos el frío, ahora calor!!!");
			break;
		default:
				alert("Falta para el invierno");
			break;
	}
}//FIN DE LA FUNCIÓN