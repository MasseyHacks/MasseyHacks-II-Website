$(document).ready(function() {
	// Background animation
	particlesJS.load('bg', 'assets/particles.json');

	// Typer.js
	$('[data-typer-targets]').typer();

	$("#bg").height($(window).height());

	// $("#intro-content").css("padding-top", ($(window).height() / 2) - ($("#intro-content").height() / 2) - 200);
	
	$("#about-l").click(function() {
		$('body').animate({
		    scrollTop: $("#about").offset().top - 70
		}, 500);
	});

	$("#faq-l").click(function() {
		$('body').animate({
		    scrollTop: $("#faq").offset().top - 70
		}, 500);
	});

	$("#sponsors-l").click(function() {
		$('body').animate({
		    scrollTop: $("#sponsors").offset().top - 70
		}, 500);
	});

	$("#schedule-l").click(function() {
		$('body').animate({
		    scrollTop: $("#schedule").offset().top - 70
		}, 500);
	});

	$("#team-l").click(function() {
		$('body').animate({
		    scrollTop: $("#team").offset().top - 70
		}, 500);
	});

	$("#press-l").click(function() {
		$('body').animate({
		    scrollTop: $("#press").offset().top - 70
		}, 500);
	});

	$("#home").click(function() {
		$('body').animate({
		    scrollTop: 0
		}, 500);
	});

	// Sticky

	$("#about-sticky-l").click(function() {
		$('body').animate({
		    scrollTop: $("#about").offset().top - 70
		}, 500);
	});

	$("#faq-sticky-l").click(function() {
		$('body').animate({
		    scrollTop: $("#faq").offset().top - 70
		}, 500);
	});

	$("#sponsors-sticky-l").click(function() {
		$('body').animate({
		    scrollTop: $("#sponsors").offset().top - 70
		}, 500);
	});

	$("#schedule-sticky-l").click(function() {
		$('body').animate({
		    scrollTop: $("#schedule").offset().top - 70
		}, 500);
	});

	$("#team-sticky-l").click(function() {
		$('body').animate({
		    scrollTop: $("#team").offset().top - 70
		}, 500);
	});

	$("#press-sticky-l").click(function() {
		$('body').animate({
		    scrollTop: $("#press").offset().top - 70
		}, 500);
	});

	$("#home-sticky").click(function() {
		$('body').animate({
		    scrollTop: 0
		}, 500);
	});

	$("#contact-form").submit(function(e) {
        e.preventDefault();
        var $this = $(this);
        $.post(
            $this.attr('action'),
            $this.serialize(),
            function(data) {
                if (data.success) {
                    $("#fullname").val("");
                    $("#email").val("");
                    $("#message").val("");
                }
               	alert(data.message);
            }, "json")
    });

});

$(window).scroll(function() {
	if ($(document).scrollTop() >= $("#about").offset().top - 70) {
		$("#sticky").slideDown(200);
	} else {
		$("#sticky").slideUp(200);
	}
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-55807810-6', 'auto');
ga('send', 'pageview');