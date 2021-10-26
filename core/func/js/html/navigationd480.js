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

function showDMCA() {
	$(".gModalContent").html('<h2>ABOUT US</h2><p>Our website is in dev and informations are coming soon ! <a href="">our discord</a>. We are comiiiing</p>');
	$('.globalModal').modal({ show: true});
}