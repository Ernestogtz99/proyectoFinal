
let operacion = document.getElementById('operacion');
let resultado = document.getElementById('resultado');
let canvas = document.getElementById('canvas');

function agregar(num)
{
	operacion.innerHTML += num;
	calcular();
}

function calcular()
{
	resultado.innerHTML = eval(operacion.innerHTML);
}

function borrar()
{
	operacion.innerHTML = "";
	resultado.innerHTML = "";
}

function mostrarResultado()
{
	operacion.innerHTML = resultado.innerHTML;
	resultado.innerHTML = "";
}

function claro() {
	//iconos
	document.querySelector('.fa-sun').classList.remove('inactivo');
	document.querySelector('.fa-moon').classList.add('inactivo');
	document.querySelector('#modo').classList.add('modoClaro')

	//Canvas
	canvas.classList.remove('canvasOscuro');
	canvas.classList.add('canvasClaro');

	//Botones
	document.querySelector('#botones').classList.add('botonesClaro');
	document.querySelector('#botones').classList.remove('botonesOscuro');
	let boton = document.querySelectorAll('button');
	for (i=boton.length-1; i >= 0; i--)
	{
		if (boton[i].classList.contains('operadores'))
		{
			boton[i].classList.add('operadoresClaro');
		}
		else
		{
			boton[i].classList.remove('botonesOscuro');
			boton[i].classList.add('botonesClaro');	
		}
		

		
	}
	document.querySelector('#igual').classList.add('igualClaro');

	//Respuesta
	document.querySelector('#operacion').classList.add('operacionClaro');
	document.querySelector('#resultado').classList.add('resultadoClaro');

}

function oscuro(){
	//iconos
	document.querySelector('.fa-sun').classList.add('inactivo');
	document.querySelector('.fa-moon').classList.remove('inactivo');
	document.querySelector('#modo').classList.remove('modoClaro');

	//Canvas
	canvas.classList.add('canvasOscuro');
	canvas.classList.remove('canvasClaro');

	//Botones
	document.querySelector('#botones').classList.remove('botonesClaro');
	document.querySelector('#botones').classList.add('botonesOscuro');
	let boton = document.querySelectorAll('button');
	for (i=boton.length-1; i >= 0 ;i--)
	{
		
		if (boton[i].classList.contains('operadores'))
		{
			boton[i].classList.remove('operadoresClaro');
		}
		else
		{
			boton[i].classList.add('botonesOscuro');
			boton[i].classList.remove('botonesClaro');

		}
	}
	document.querySelector('#igual').classList.remove('igualClaro');

	
	//Respuesta
	document.querySelector('#operacion').classList.remove('operacionClaro');
	document.querySelector('#resultado').classList.remove('resultadoClaro');
}

