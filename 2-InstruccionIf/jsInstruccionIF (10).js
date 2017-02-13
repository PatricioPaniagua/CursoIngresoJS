function Mostrar()
{if(true)
	{var nota;
		nota = parseInt(math.random()*(10-1))-1;
	}
	if(nota >=9)
	{	
		alert("Excelente");
	}
		else
			{if(nota >4)
				{
					alert("Aprobó");
				}
				else
					{if(nota <4)
						{
							alert("Vamos, la próxima se puede");
						}
					}

			}

}//FIN DE LA FUNCIÓN