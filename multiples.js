function multiples() {
	
	var sum = 0;

	var form = document.forms["numform"];

	var num = form.elements["num"];



	for(var i=0; i<=num; i++){
		if(i%3==0 || i%5==0) {
			sum = sum + i;
		}
	}
	return multiples();
}


