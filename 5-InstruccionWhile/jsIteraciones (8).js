function Mostrar()
{
var acumNotas=0;
var cantAprob=0;
var num;
var notaMax;
var notaMin;
var primera=true;
var contNotas=0, contNt=0;
var sexo;
num = prompt("Notas");
num = parseInt(num);

while(confirm("Notas"))
	{	num = prompt("Notas");
		num = parseInt(num);

		while(num <1 || num >10)
			{	
				num = prompt("Notas");
				num = parseInt(num);
				contNt++;
				if(num >=4)
				{
					acumNotas+= num;
					cantAprob++;
				}
				else
				{
					acumNotas = num;
					cantNotas++;
				}
			}
			while(sexo!="f" && sexo!="m")
			{
				sexo = prompt("Indique su sexo");	
			}
			if(primeraM)
				{
					primeraM = false;
					notaMax = num;
					notaMin = num;
				}
			else
				{
					if(nota > notaMax)
					{
						notaMax = num;
					}

				}

	}
	alert(cantAprob);
	alert(acumNotas);
}//FIN DE LA FUNCIÓN