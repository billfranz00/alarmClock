function compareTime() {
	var rightNow = new Date();
	var hours = rightNow.getHours();
	if(hours > 12) {
		hours = hours-12; //or h -= 12;
	}
	else if(hours === 0) {
		hours = 12;
	}
	var clockValue = Number(document.getElementById("clockHour").value);
	if(hours === clockValue) {
		alert("It's the same hour")
	}
	else {
		alert("Not time yet")
	}
}