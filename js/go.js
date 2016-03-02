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
		return hour = hour-12; //or h -= 12;
	}
	else if(hour === 0) {
		return hour = 12;
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
	var rightNow = new Date(),
		hours = twelve(rightNow.getHours()),
		minutes = rightNow.getMinutes(),
		clockValue = Number(document.getElementById("clockHour").value),
		minuteValue = Number(document.getElementById("clockMinute").value);
	if(hours === clockValue && minutes === minuteValue) {
		//shows an alert when the times match
		alert("It's Time!!!!")
	}
	else {
		//runs function again if time inputted isn't the same as the actual time
		setTimeout(function() {
			compareTime();
		}, 1000)
	}
}