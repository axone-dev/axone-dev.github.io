function doPing() {
	$.get("/core/func/api/auth/ping.php", function(response) {
		console.log("Ping complete");
	})
}

$(document).ready(function() {
	$(function () {
		$("[data-toggle='tooltip']").tooltip();
	});
	$('.dropdown').on('show.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});

	// Add slideUp animation to Bootstrap dropdown when collapsing.
	$('.dropdown').on('hide.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});
	
	$('#navbarSideButton').click(function() {
		$(".navbar-side").show();
		//$(".navbottomMargin").css("margin-bottom", "0px");
		//$("body").css("position", "relative").css("top", "0px");
		$('.navbarSide').addClass('reveal');
		$(".overlay").fadeIn(500);
		$('html, body').css({
			overflow: 'hidden',
			height: '100%'
		});
	});
	
	$(".navbottomMargin-m").css("margin-bottom", $(".navbar").css("height"));
	
	$('.overlay').on('click', function() {
		//$(".navbottomMargin").css("margin-bottom", "53px");
		//$("#appContainer").css("position", "initial").css("top", "0px");
		$('.navbarSide').removeClass('reveal');
		$('.overlay').fadeOut(500, function () {
			$(".navbar-side").hide();
		})
		$('html, body').css({
			overflow: 'auto',
			height: 'auto'
		});
	});
	
	$(".side-link").on('click', function() {
		$(".overlay").click();
	});
	
	$("#searchUser").click(function() {
		var searchValue = $("#searchValue").val();
		if (searchValue.length != 0) {
			if ($("#searchValue").attr("placeholder") == "Username") {
				window.location = "/users/" + searchValue;
			}else if ($("#searchValue").attr("placeholder") == "Group name") {
				window.location = "/groups/search/" + searchValue;
			}
		}else{
			$("#navSearch").addClass("has-error");
		}
	})
	
	if ($(window).width() < 1200) {
		$("#searchUser").hide();
		$("#searchValue").hide();
		$("#switchSearch").hide();
	}else{
		$("#searchUser").show();
		$("#searchValue").show();
		$("#switchSearch").show();
	}
	
	$(window).on('resize', function() {
		if ($(window).width() < 1200) {
			$("#searchUser").hide();
			$("#searchValue").hide();
			$("#switchSearch").hide();
		}else{
			$("#searchUser").show();
			$("#searchValue").show();
			$("#switchSearch").show();
		}
	});
	
	// Toggle on enter
	$("#searchValue").keyup(function(event) {
		if(event.keyCode == 13) {
			$("#searchUser").click();
		}
	})
	
	$("#switchSearch").click(function() {
		if ($("#searchValue").attr("placeholder") == "Username") {
			$("#searchValue").attr("placeholder", "Group name")
		}else if ($("#searchValue").attr("placeholder") == "Group name") {
			$("#searchValue").attr("placeholder", "Username")
		}
	})
	
	doPing();
	setInterval(function(){
		doPing();
	}, 30000);
});

function showABOUTUS() {
	$(".gModalContent").html('<h2>ABOUT US</h2><p>Hello, we are glad to see you here. Welcome to Axone ! <p style="color:grey"> We are a group of developpers working on ROBLOX projects (mostly). We have made this website to share what we are doing or what we have created. You can ask on our Discord to share your own project/creation. Axone does not permit and will not share malicious project/creation that ruins other users experience. Only "educational" projects/creations are accepted. Meaning that this project/creation will not be used to harm users, games, or other but used for learning and improve development skills. You ARE NOT ALLOWED to steal the content of this website. <br> All rights belong to Your Local Musk and the Axone Team (Your Local Musk, Oxype)<p><br> </p>');
	$('.globalModal').modal({ show: true});
}
