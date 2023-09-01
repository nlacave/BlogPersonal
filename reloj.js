function avanzaReloj() {
	momentoActual = new Date();
	hora = momentoActual.getHours();
	minuto = momentoActual.getMinutes();
	segundo = momentoActual.getSeconds();
	if (segundo < 10) {
		segundo = "0" + segundo;
	}
	if (minuto < 10) {
		minuto = "0" + minuto;
	}
	if (hora < 10) {
		hora = "0" + hora;
	}

	horaAMostrar = hora + " : " + minuto + " : " + segundo;

	document.form_reloj.reloj.value = horaAMostrar;
	setTimeout("avanzaReloj()", 1000);
}
