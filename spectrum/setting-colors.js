//Waits for a button with an id name that contains 'update' to be clicked
$("button[id*='update']").click(function() {
	//Gets the id name
	var number = this.id;
	//Takes the number of the row off the end of the id
	number = number.substr(number.length - 1);
	//Sets it to the row id
	number = "#row" + number;

	//Makes the row's red id
	var red = number + "_R";
	//Extracts the content of the red textbox, and converts it to hex
	red = parseInt($(red).val()).toString(16);
	//If the hex isn't 2 digits, it adds zeros to the front
	while (red.length < 2) {
	    red = "0" + red;
	}

	//Same as above for green
	var green = number + "_G";
	green = parseInt($(green).val()).toString(16);
	while (green.length < 2) {
	    green = "0" + green;
	}
	
	//Same as above for blue
	var blue = number + "_B";
	blue = parseInt($(blue).val()).toString(16);
	while (blue.length < 2) {
	    blue = "0" + blue;
	}

	//Creates the new color through concatination
	var color = "#" + red + green + blue;
	console.log(color);
	//Sets the color to the new color
	$(number).spectrum("set", color);
});
