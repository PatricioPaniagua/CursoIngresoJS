function Mostrar()
{
var num = prompt("Numero");
var cont = 0;
for(var i = 1; i <= num ; i++)
	{
		if(num % i == 0)
			{
				cont++;
			}
	}
if(cont == 2)
	{
		alert("Es primo");
	}
else
	{
		alert("No es primo");
	}
}//FIN DE LA FUNCIÓN