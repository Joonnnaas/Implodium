function hoverOn(numberOfClass) {
	let hover = document.getElementsByClassName("hover");
	
	if(numberOfClass != 7) {
		hover[numberOfClass].style.height = "10px";
	}
}

function hoverOff(numberOfClass) {
	let hover = document.getElementsByClassName("hover");
	
	if(numberOfClass != 7) {
		hover[numberOfClass].style.height = "0";
	}
}