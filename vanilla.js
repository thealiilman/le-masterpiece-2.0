//Variables
let landingContainer = document.getElementById("landing-container"),
	menuContainer = document.getElementById("menu-container"),
	menuBtn = document.getElementById("menu"),
	navLinks = document.getElementById("links");
//Functions
function menuToggle() {
	navLinks.classList.toggle("linksOnOff");
}

function menuShadow() {
	//If page is past landing container-64.
	if(document.body.scrollTop+48 > landingContainer.clientHeight) {
		menuContainer.style.boxShadow = "0px 2px 1px rgba(51, 51, 51, 0.16)";
	}
	else {
		menuContainer.style.boxShadow = "";
	}
}

//onClick for menu button.
menuBtn.onclick = menuToggle;

//onScroll for menuContainer's box-shadow.
window.onscroll = menuShadow;

//Unused

//Functions
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

//Telling the computer what to do.

//An if/else statement to check if window's width is more than 768px. Do "that" if more, do "this" if less.
/*if(winWidth >= 768) {
	window.onscroll = nonMobileNavStyle;
}*/
//An if/else statement for #menu-container box-shadow.
/*if (document.body.scrollTop > 64) {
	menuShadow.style.boxShadow = "0px 2px 2px rgba(51, 51, 51, 0.16)";
}
else {
	menuShadow.style.boxShadow = "0px 0px 2px rgba(51, 51, 51, 0.16)";
}*/