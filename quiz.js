var resp = [0,0,0,0];
var numQuestions = 5;
var personName = '';

function setupPage() {
	for (var q=1; q <= numQuestions; q++) {
		for (var i=0; i <= resp.length; i++) {
			document.getElementById(q + '.' + i).style.display = 'none';
		}
	}
	document.getElementById('clickMe2').style.display = 'none';
}

function submitName() {
	document.getElementById('topText').style.display = 'none';	
	document.getElementById('SoName').style.display = 'none';	
	document.getElementById('Submit1').style.display = 'none';
	personName = document.getElementById('SoName').value;
	for (var i=0; i <= resp.length; i++) {
		document.getElementById("1." + i).style.display = 'unset';
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
			document.getElementById('clickMe2').style.display = 'unset';
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
	var score = 0;

	// replace each 'out_' with a personality trait or sumthin
	if (letter == 'a') {
		score = 80;
		if (max > numQuestions) {
			score += 5;
		}
	} else if (letter == 'b') {
		score = 65;
		if (max > numQuestions) {
			score -= 5;
		}
	} else if (letter == 'c') {
		res = 'out3';
	} else if (letter == 'd') {
		res = 'out4';
	}
	if (personName.length <= 3) {
		score -= 10;
	} else {
		score += personName.charCodeAt(3) / 8;
	}

	res = "You and " + personName + " are " + score + "% compatible!";
	document.getElementById("result").innerHTML = res;
	document.getElementById("result").scrollIntoView();
}

