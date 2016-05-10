function annoyingMicahFilter(message) {
	var d = new Date();
	d = d.getDate().toString();
	var formatted;
	var output = [];
	for(i=0;i < d.length; i++) {
	output.push(+d.charAt(i));
	}

	var j = function(n) {
	if(output[n] == 0 || output[n] == 4 || output[n] == 5 || output[n] == 6 || output[n] == 7 || output[n] == 8 || output[n] == 9) {formatted = formatted || d+"th"; console.log(output[n])}
	else if(output[n] == 1) {formatted = formatted || d+"st"}
	else if(output[n] == 2) {formatted = formatted || d+"nd"}
	else if(output[n] == 3) {formatted = formatted || d+"rd"}
	}

	if (output.length == 1) {
		j(0);
	}
	else if (output.length == 2) {
		j(1);
	}
	if(output[0] == 1 && output.length == 2) {
		//if the number is a teen, always use "th"
		formatted = d+"th";
		console.log('active?')
	}
	console.log(output) 
	return "MAY THE " + formatted + " BE WITH YOU!";
}
annoyingMicahFilter()