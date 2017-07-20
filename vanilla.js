//Variables
let navLinks = document.getElementById("links");
let menuShadow = document.getElementById("menu-container");

//Functions
function menuToggle() {
	navLinks.classList.toggle("linksOnOff");
}

function nonMobileNavStyle() {
	if (document.body.scrollTop > 64) {
		navLinks.style.backgroundColor = "white";
		navLinks.style.color = "#333";
	} 
	else {
		navLinks.style.backgroundColor = "";
		navLinks.style.color = "white";
	}
}

function mobileNavStyle() {
	if (document.body.scrollTop > 64) {
		document.getElementById("menu-container").style.backgroundColor = "white";
	} 
	else {
		document.getElementById("menu-container").style.backgroundColor = "";
	}
}