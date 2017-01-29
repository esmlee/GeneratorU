var resp = [0,0,0,0]

function increaseCount(opt) {
	if (opt == 'a') {
		resp[0]++;
	} else if (opt == 'b') {
		resp[1]++;
	} else if (opt == 'c') {
		resp[2]++;
	} else if (opt == 'd') {
		resp[3]++;
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
	var res = 'Empty for now';

	// replace each 'out_' with a personality trait or sumthin
	if (letter == 'a') {
		res = 'out1';
	} else if (letter == 'b') {
		res = 'out2';
	} else if (letter == 'c') {
		res = 'out3';
	} else if (letter == 'd') {
		res = 'out4';
	}
	document.getElementById("result").innerHTML = res;
}