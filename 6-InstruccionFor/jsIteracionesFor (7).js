function Mostrar()
{
var num = prompt("Número");
var cant = 0;
var div = "Divisores de " + num + "<br>";
for(var i = 1; i <= num; i++)
	{
		if(num % i == 0)
			{
				cant++;
				div+= 2 + "<br>";
			}
	}

div += "cant:" + cant + "<br>";
document.write(div);

}//FIN DE LA FUNCIÓN