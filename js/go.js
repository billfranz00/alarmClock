//If number is a single digit, a zero is added in front (to make clock look better)
function addZero(i) {
	if(i < 10) {
		return "0" + i;
	}
	else {
		return i;
	}
}

//Changes hour to am/pm (not internationl time)
function twelve(hour) {
	if(hour > 12) {
		return hour = hour - 12; //or h -= 12;
	}
	else if(hour == 0) {
		return hour = 12;
	}
	else {
		return hour
	}
}

//Continuous Clock, updates every second
function currentTime() {
	var rightNow = new Date(),
		hours = twelve(rightNow.getHours()),
		minutes = addZero(rightNow.getMinutes()),
		seconds = addZero(rightNow.getSeconds()),
		theTime = hours + ":" + minutes + ":" + seconds;
	document.getElementById("masterClock").innerHTML = theTime;
	//runs function every second
	setTimeout(function() {
		currentTime();
	}, 1000);
}

//Determines if inputted is same as current time
function compareTime() {
	document.body.setAttribute('class', 'red')
	document.getElementById('hOne').style.display = "block"
	var rightNow = new Date(),
		hours = twelve(rightNow.getHours()),
		minutes = rightNow.getMinutes(),
		seconds = rightNow.getSeconds(),
		clockValue = Number(document.getElementById("clockHour").value),
		minuteValue = Number(document.getElementById("clockMinute").value),
		secondValue = Number(document.getElementById("clockSecond").value);
	if(hours === clockValue && minutes === minuteValue && seconds === secondValue) {
		//shows an alert when the times match
		document.getElementById('hOne').style.display = "none"
		document.body.setAttribute("class", "blue");
		document.getElementById("masterClock").setAttribute("class", "animated wobble infinite")
		var img1 = document.createElement("img"),
			img2 = document.createElement("img"),
			audio = document.createElement("audio");
		img1.src = "https://catmacros.files.wordpress.com/2009/12/wait_what.jpg"
		img2.src = "http://i.imgur.com/clcP0gS.jpg"
		audio.src = "sound/theSong.mp3"
		img1.setAttribute("class", "left animated jello infinite")
		img2.setAttribute("class", "right animated hinge infinite")
		audio.setAttribute("type", "audio/mpeg")
		audio.setAttribute("autoplay", "autoplay")
		document.body.appendChild(img1)
		document.body.appendChild(img2)
		document.body.appendChild(audio)
	}
	else {
		//runs function again if time inputted isn't the same as the actual time
		setTimeout(function() {
			compareTime();
		}, 1000)
	}
}