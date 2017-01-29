var resp = [0,0,0,0];
var numQuestions = 5;

function setupPage() {
	for (var q=2; q <= numQuestions; q++) {
		for (var i=0; i <= resp.length; i++) {
			document.getElementById(q + '.' + i).style.display = 'none';
		}
	}
}

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
	var next = 1 + parseInt(q);
	for (var i=0; i <= resp.length; i++) {
		document.getElementById(q + '.' + i).style.display = 'none';
		if (parseInt(q) == numQuestions) {
			continue;
		}
		var nextElement = document.getElementById(next.toString() + '.' + i);
		nextElement.style.display = 'unset';
		if (i == 0) {
			nextElement.scrollIntoView();
		}
	}
}

function increaseCount2(opt, ele) {
	increaseCount(opt, ele);
	increaseCount(opt, ele);
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
	document.getElementById("result").scrollIntoView();
}

