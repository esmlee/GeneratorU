var resp = [0,0,0,0]

function increaseCount(opt, ele) {
	if (opt == 'a') {
		resp[0]++;
	} else if (opt == 'b') {
		resp[1]++;
	} else if (opt == 'c') {
		resp[2]++;
	} else if (opt == 'd') {
		resp[3]++;
	}
	var q = ele.id.charAt(0);
	for (var i=0; i <= resp.length; i++) {
		document.getElementById(q + '.' + i).style.display = 'none';
	}
}

function calculateResult() {
	max = 0;
	letter = '?';
	for (var i=0; i < resp.length; i++) {
		if (resp[i] > max) {
			max = resp[i];
			letter = String.fromCharCode(97 + i);
		}
	}
	var res = 'No results yet!';

	// replace each 'out_' with a personality trait or sumthin
	if (letter == 'a') {
		res = "You deserve a lovely caring SO!";
	} else if (letter == 'b') {
		res = "You need someone to keep you interested!";
	} else if (letter == 'c') {
		res = 'out3';
	} else if (letter == 'd') {
		res = 'out4';
	}
	document.getElementById("result").innerHTML = res;
}