//inital code written by Kyrsten Iley‎ 

function annoyingMicahFilter(message) {
	var d = new Date();
	d = d.getDate().toString();
	var f_d;
	var o = [];
	for(i=0;i < d.length; i++) {
		o.push(+d.charAt(i));
	}

	var j = function(n) {
		if(o[n] == 0 || o[n] == 4 || o[n] == 5 || o[n] == 6 || o[n] == 7 || o[n] == 8 || o[n] == 9) {f_d = f_d || d+"th";}
		else if(o[n] == 1) {f_d = f_d || d+"st"}
		else if(o[n] == 2) {f_d = f_d || d+"nd"}
		else if(o[n] == 3) {f_d = f_d || d+"rd"}
	}

	if (o.length == 1) {
		j(0);
	}
	else if (o.length == 2) {
		j(1);
	}
	if(o[0] == 1 && o.length == 2) {
		//if the number is a teen, always use "th"
		f_d = d+"th";
	}

	return "MAY THE " + f_d + " BE WITH YOU!";
}
annoyingMicahFilter()