function Mostrar()
{

	var contador0=0;
	var cantP;
	var cantN;
	var acumP=0, acumN=0;
	var respuesta="si";
	var num;
	var max;
	var min;
	while(confirm("Escriba los números que quiera"))
	{	
		num = prompt("Escriba los números que quiera");
		num = parseInt(num);
		
			if(num >0)
				{
					acumP = num;
					cantP++;
				}
			else if(num == 0)
				{
					contador0++;
				}
			else
				{
					acumN = num;
					cantN++;
				}

	
			if(num % 2 == 0)
				{
					cantP++;
				}
	}
	msj = "Negativos" + cantN + "<br>";
	msj = "Positivos" + cantP + "<br>";
	msj = "Suma positivos = " + acumP + "<br>";
	msj = "Suma negativos = " + acumN + "<br>";
	msj = "Cantidad de 0 es " + contador0 + "<br>";
	msj = "Promedio positivos = " + (acumP/cantP) + "<br>";
	msj = "Promedio Negativos = " + (acumN/cantN) + "<br>";
	msj = "Diferencia = " + (acumP-acumN) + "<br>";
	document.write(msj);
		

}//FIN DE LA FUNCIÓN