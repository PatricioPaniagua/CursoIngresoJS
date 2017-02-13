/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{if(true)
 	{var cant;
 	 var num1;
 	 var num2;
 	 var num3;
 	 var mark;
 	 num1 = 35;
 	cant = document.getElementById("Cantidad").value;
 	mark = document.getElementById("Marca").value;
 	num2 = document.getElementById("precioDescuento").value * 1.10;
	num3 = num2 - document.getElementById("precioDescuento").value;
		if(cant >=6)
		{
			document.getElementById("precioDescuento").value = cant * (num1 * 0.5);
		}
	switch(mark)
		{
			case "ArgentinaLuz":
				if(cant = 5)
					{
						document.getElementById("precioDescuento").value = cant * (num1 * 0.6);
					}
					break;
			default:
				if (cant = 5)
					{
						document.getElementById("precioDescuento").value = cant * (num1 * 0.7);
					}
					break;
		}
	switch(mark)
		{
			case "ArgentinaLuz":
			case "FelipeLamparas":
				if(cant = 4)
					{
						document.getElementById("precioDescuento").value = cant * (num1 * 0.75);
					}
					break;
			default:
				if(cant = 4)
					{
						document.getElementById("precioDescuento").value = cant * (num1 * 0.8);
					}
					break;
		}
	switch(mark)
		{
			case "ArgentinaLuz":
				if(cant = 3)
					{
						document.getElementById("precioDescuento").value = cant * (num1 * 0.85);
					}
					break;
			case "FelipeLamparas":
				if(cant = 3)
					{
						document.getElementById("precioDescuento").value = cant * (num1 * 0.9);
					}
					break;
			default:
				if(cant = 3)
					{
						document.getElementById("precioDescuento").value = cant * (num1 * 0.95);
					}
					break;
		}

		if(document.getElementById("precioDescuento").value >120)
			{
				alert("IIBB Usted pagó" + num3);
			}
		if(cant <=2)
			{
				document.getElementById("precioDescuento").value = cant * num1;
			}

	}
}
