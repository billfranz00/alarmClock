function compareTime() {
	var rightNow = new Date();
	var hours = rightNow.getHours();
	var minutes = rightNow.getMinutes();
	if(hours > 12) {
		hours = hours-12; //or h -= 12;
	}
	else if(hours === 0) {
		hours = 12;
	}
	var clockValue = Number(document.getElementById("clockHour").value);
	var minuteValue = Number(document.getElementById("clockMinute").value);
	if(hours === clockValue && minutes === minuteValue) {
		alert("It's Time!!!!")
	}
	else {
		alert("Not time yet")
	}
}