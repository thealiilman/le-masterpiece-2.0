$(function () {
	let landingContainer = document.getElementById("landing-container"),
		menuContainer = document.getElementById("menu-container");
	function menuShadow() {
		//If page is past landing container-64.
		if (document.body.scrollTop > landingContainer.clientHeight) {
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
    $.ajax({
      url: "form.php",
      type: "POST",
      data: {
        name: $("#form-name").val(),
        email: $("#form-email").val(),
        subject: $("#form-subject").val(),
        message: $("#form-message").val()
      },
      success: function() {
          alert("Email has been sent!");
      }       
    });
  });
});
