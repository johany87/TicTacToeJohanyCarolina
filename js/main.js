//VARIABLES GLOBALES
	var turno = 1; //VARIABLE PARA ALTERNAR ENTRE X Y O
	var gana = false; //VARIABLE PARA ENVIAR A LA FUNCTION GANADOR
	var contador = 1; //VARIABLE PARA CONTAR LOS TURNOS
	var player1; // ALMACENA EL NOMBRE DEL PRIMER JUGADOR
	var player2; // ALMACENA EL NOMBRE DEL SEGUNDO JUGADOR
	var signals; // ELEMENTO HTML PARA MOSTRAR LOS TURNOS
//FUNCION PARA ESTABLECER GANADOR
	function ganador(gana) {
		if(gana === true){
			if ((tablero[0].textContent=="X"&& tablero[1].textContent=="X"&& tablero[2].textContent=="X") ||
					 (tablero[3].textContent=="X"&& tablero[4].textContent=="X"&& tablero[5].textContent=="X") ||
					 (tablero[6].textContent=="X"&& tablero[7].textContent=="X"&& tablero[8].textContent=="X") ||
					 (tablero[0].textContent=="X"&& tablero[3].textContent=="X"&& tablero[6].textContent=="X") ||
				     (tablero[1].textContent=="X"&& tablero[4].textContent=="X"&& tablero[7].textContent=="X") ||
				     (tablero[2].textContent=="X"&& tablero[5].textContent=="X"&& tablero[8].textContent=="X") ||
				     (tablero[0].textContent=="X"&& tablero[4].textContent=="X"&& tablero[8].textContent=="X") ||
				     (tablero[2].textContent=="X"&& tablero[4].textContent=="X"&& tablero[6].textContent=="X")) {
				   alert("Ganador: "+player1);
			}	else if((tablero[0].textContent=="O" && tablero[1].textContent=="O" && tablero[2].textContent=="O") ||
					 (tablero[3].textContent=="O" && tablero[4].textContent=="O" && tablero[5].textContent=="O") ||
					 (tablero[6].textContent=="O" && tablero[7].textContent=="O" && tablero[8].textContent=="O") ||
					 (tablero[0].textContent=="O" && tablero[3].textContent=="O" && tablero[6].textContent=="O") ||
				     (tablero[1].textContent=="O" && tablero[4].textContent=="O" && tablero[7].textContent=="O") ||
				     (tablero[2].textContent=="O" && tablero[5].textContent=="O" && tablero[8].textContent=="O") ||
				     (tablero[0].textContent=="O" && tablero[4].textContent=="O" && tablero[8].textContent=="O") ||
				     (tablero[2].textContent=="O" && tablero[4].textContent=="O" && tablero[6].textContent=="O")) {
					 alert("Ganador: "+player2);
			}
		}else{
		}
	}
//FUNCION DIBUJAR EN LAS celdas
	function dibujar(evento){
		posicion = evento.target.id.charAt(1);
		if(contador > 4){
			gana=true;
			ganador(gana);
		}
		if (turno % 2 !== 0) {
			if (tablero[posicion] == "X" || tablero[posicion] == "O"){
				/*NO HACE NADA PORQUE LA CELDA ESTA OCUPADA*/
			}else {
				tablero[posicion].textContent = "X";
				tablero[posicion].style.background="#DB5734";
				document.getElementById("h2signals").textContent = player2;
				turno++;
				contador++;
			}
		}else {
			if (tablero[posicion] == "X" || tablero[posicion] == "O"){
				/*NO HACE NADA PORQUE LA CELDA ESTA OCUPADA*/
			}else {
				tablero[posicion].textContent = "O";
				tablero[posicion].style.background="#DB5734";
				document.getElementById("h2signals").textContent = player1;
				turno++;
				contador++;
			}
		}
	}//DIBUJAR
//FUNCION PARA RECARGAR EL JUEGO
	function play_again(){
		window.location.reload();
	}
// VARIABLE PARA ALMACENAR LA TABLA
	var tablero;

document.addEventListener("DOMContentLoaded", function(){
		//CAPTURAMOS LOS NOMBRES DE LOS JUGADORES
			player1 = prompt("Hola bienvenido cual es el nombre del primer jugador");
			player2 = prompt("Hola bienvenido cual es el nombre del segundo jugador");
		//CAPTURAMOS LOS ELEMENTOS HTML PARA MOSTRAR LOS NOMBRES
			var namep1 = document.querySelector("#name_player1");
			var namep2 = document.querySelector("#name_player2");
		//MOSTRAMOS LOS NOMBRES EN EL ELEMENTO HTML
			namep1.textContent = player1;
			namep2.textContent = player2;
		//MOSTRAMOS EL PRIMER TURNO
			signals = document.querySelector("#h2signals");
			signals.textContent = player1;
		//CREAMOS EL ARRAY PARA ALMACENAR LAS POSICIONES
			tablero = document.querySelectorAll(".square");
		//AGREGAMOS EL ESCUCHA A LAS CELDAS DE LA TABLA
			for (var i=0; i<tablero.length; i++){
				tablero[i].addEventListener("click", dibujar);
			}
		//CAPTURAMOS EL BOTON Y AGREGAMOS EL ESCUCHA PARA PARA INICIAR DE NUEVO EL JUEGO
			var restart = document.querySelector("#again");
			restart.addEventListener("click", play_again);
});
