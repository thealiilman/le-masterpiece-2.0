$(function () {
	let landingContainer = document.getElementById("landing-container"),
		menuContainer = document.getElementById("menu-container");
	function menuShadow() {
		//If page is past landing container-64.
		if (document.body.scrollTop + 50 > landingContainer.clientHeight) {
			menuContainer.style.boxShadow = "0px 2px 1px rgba(51, 51, 51, 0.16)";
		}
		else {
			menuContainer.style.boxShadow = "";
		}
	}
	window.onscroll = menuShadow();

	$("#menu").on("click", function () {
		$("#links").toggleClass("linksOnOff");
	});

	$("#links a").on("click", function () {
		$("#links").removeClass("linksOnOff");
	});

	$("#about").on("click", function () {
		$("html, body").animate({
			scrollTop: $("#about-container").offset().top - 48
		}, 2000);
	});

	$("#services").on("click", function () {
		$("html, body").animate({
			scrollTop: $("#services-container").offset().top - 48
		}, 2000);
	});

	$("#portfolio").on("click", function () {
		$("html, body").animate({
			scrollTop: $("#portfolio-container").offset().top - 48
		}, 2000);
	});

	$("#contact").on("click", function () {
		$("html, body").animate({
			scrollTop: $("#contact-container").offset().top - 48
		}, 2000);
	});
	
	$('#formbtn').click(function(event) {
		event.preventDefault();
    var sendEmailNotify = document.getElementById("send-email-notify");
		var name = document.getElementById("form-name").value;
		var email = document.getElementById("form-email").value;
		var subject = document.getElementById("form-subject").value;
		var message = document.getElementById("form-message").value;
		if(name === "" || email === "" || subject === "" || message === "") {
      sendEmailNotify.classList.add("send-email-failure");
			sendEmailNotify.textContent = "Please fill in the form";
		}
		else {
			$.ajax({
				url: 'form.php',
				type: 'POST',
				data: {
					name: name,
					email: email,
					subject: subject,
					message: message
				},
				success: function() {
          sendEmailNotify.classList.remove("send-email-failure");
					sendEmailNotify.classList.add("send-email-success");
          sendEmailNotify.textContent = "Email has been sent! Ali will get back to you soon.";
				}       
			});
		}
  });
});