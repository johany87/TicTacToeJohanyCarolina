//VARIABLES GLOBALES
	var turn = 1; //VARIABLE PARA ALTERNAR ENTRE X Y O
	var win = false; //VARIABLE PARA ENVIAR A LA FUNCTION GANADOR
	var count = 1; //VARIABLE PARA CONTAR LOS turnS
	var player1; // ALMACENA EL NOMBRE DEL PRIMER JUGADOR
	var player2; // ALMACENA EL NOMBRE DEL SEGUNDO JUGADOR
	var signals; // ELEMENTO HTML PARA MOSTRAR LOS turnS
	var pos; //POSICION DONDE SE DA CLICK

//FUNCION PARA ESTABLECER GANADOR
	function winner() {
				console.log("valido win = true");
				if ((board[0].textContent=="X"&& board[1].textContent=="X"&& board[2].textContent=="X") ||
						 (board[3].textContent=="X"&& board[4].textContent=="X"&& board[5].textContent=="X") ||
						 (board[6].textContent=="X"&& board[7].textContent=="X"&& board[8].textContent=="X") ||
						 (board[0].textContent=="X"&& board[3].textContent=="X"&& board[6].textContent=="X") ||
					   (board[1].textContent=="X"&& board[4].textContent=="X"&& board[7].textContent=="X") ||
					   (board[2].textContent=="X"&& board[5].textContent=="X"&& board[8].textContent=="X") ||
					   (board[0].textContent=="X"&& board[4].textContent=="X"&& board[8].textContent=="X") ||
					   (board[2].textContent=="X"&& board[4].textContent=="X"&& board[6].textContent=="X")) {
						 win = true;
						 alert("Ganador: "+player1);
				}	else if((board[0].textContent=="O" && board[1].textContent=="O" && board[2].textContent=="O") ||
						 (board[3].textContent=="O" && board[4].textContent=="O" && board[5].textContent=="O") ||
						 (board[6].textContent=="O" && board[7].textContent=="O" && board[8].textContent=="O") ||
						 (board[0].textContent=="O" && board[3].textContent=="O" && board[6].textContent=="O") ||
					   (board[1].textContent=="O" && board[4].textContent=="O" && board[7].textContent=="O") ||
					   (board[2].textContent=="O" && board[5].textContent=="O" && board[8].textContent=="O") ||
					   (board[0].textContent=="O" && board[4].textContent=="O" && board[8].textContent=="O") ||
					   (board[2].textContent=="O" && board[4].textContent=="O" && board[6].textContent=="O")) {
						 win = true;
						 alert("Ganador: "+player2);
				}
	}

//FUNCION draw EN LAS celdas
	function draw(evento){
		pos = evento.target.id.charAt(1);
		if (turn % 2 !== 0) {
			if (board[pos] == "X" || board[pos] == "O"){
				/*NO HACE NADA PORQUE LA CELDA ESTA OCUPADA*/
			}else {
				console.log(turn, count);
				board[pos].textContent = "X";
				document.getElementById("h2signals").textContent = "Turno de: " +player2;
				turn++;
				count++;

			}
		}else {
			if (board[pos] == "X" || board[pos] == "O"){
				/*NO HACE NADA PORQUE LA CELDA ESTA OCUPADA*/
			}else {
				console.log(turn, count);
				board[pos].textContent = "O";
				document.getElementById("h2signals").textContent = "Turno de: " +player1;
				turn++;
				count++;
			}
		}
		if(count >= 5 && count <9){
			winner();
		}
		if (count >= 10) {
			alert("EMPATE!!! \nPresiona el boton Voler a jugar!!");
		}
	}//draw

//FUNCION PARA RECARGAR EL JUEGO
	function play_again(){
		window.location.reload();
	}

// VARIABLE PARA ALMACENAR LA TABLA
	var board;

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
		//MOSTRAMOS EL PRIMER turn
			signals = document.querySelector("#h2signals");
			signals.textContent = "turn de: " +player1;
		//CREAMOS EL ARRAY PARA ALMACENAR LAS posES
			board = document.querySelectorAll(".square");
		//AGREGAMOS EL ESCUCHA A LAS CELDAS DE LA TABLA
			for (var i=0; i<board.length; i++){
				board[i].addEventListener("click", draw);
			}
		//CAPTURAMOS EL BOTON Y AGREGAMOS EL ESCUCHA PARA PARA INICIAR DE NUEVO EL JUEGO
			var restart = document.querySelector("#again");
			restart.addEventListener("click", play_again);
});
