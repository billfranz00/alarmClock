function addZero(i) {
	if(i < 10) {
		return "0" + i;
	}
	else {
		return i;
	}
}

function twelve(hour) {
	if(hour > 12) {
		return hour = hour-12; //or h -= 12;
	}
	else if(hour === 0) {
		return hour = 12;
	}
}

function currentTime() {
	var rightNow = new Date(),
		hours = twelve(rightNow.getHours()),
		minutes = addZero(rightNow.getMinutes()),
		seconds = addZero(rightNow.getSeconds()),
		theTime = hours + ":" + minutes + ":" + seconds;
	document.getElementById("masterClock").innerHTML = theTime;
	setTimeout(function() {
		currentTime();
	}, 1000);
}

function compareTime() {
	var rightNow = new Date(),
		hours = twelve(rightNow.getHours()),
		minutes = rightNow.getMinutes(),
		clockValue = Number(document.getElementById("clockHour").value),
		minuteValue = Number(document.getElementById("clockMinute").value);
	if(hours === clockValue && minutes === minuteValue) {
		alert("It's Time!!!!")
	}
	else {
		alert("Not time yet")
	}
}