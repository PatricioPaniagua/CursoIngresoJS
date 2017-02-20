function Mostrar()
{

	var num = prompt("ingrese un número entre 0 y 9.");

	while(confirm(num))
		{
			if(num >=0 && num <=9)
				{ 
					document.getElementById("FormIngreso").value = num;
					break;
				}
		}
}//FIN DE LA FUNCIÓN