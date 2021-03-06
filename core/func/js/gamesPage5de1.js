var refreshId1;
var refreshId2;
var refreshId3;
var version = 0;

function stopInterval(variable) {
	clearInterval(variable);
}

function doCSS(id) {
	if (refreshId1) {
        stopInterval(refreshId1);
    }
	
	if (refreshId2) {
        stopInterval(refreshId2);
    }
	
	if (refreshId3) {
        stopInterval(refreshId3);
    }
	if (id == 1) {
		$("#showPublic").css("background-color", "#ddd");
		$("#showMy").css("background-color", "#f0f0f0");
		$("#showMyS").css("background-color", "#f0f0f0");
		$("#result").load("/core/func/api/games/getPublic.php?version=" + version);
		refreshId1 = setInterval(function() {
			$("#result").load("/core/func/api/games/getPublic.php?version=" + version);
		}, 15000);
	}else if (id == 2) {
		$("#showPublic").css("background-color", "#f0f0f0");
		$("#ShowMyS").css("background-color", "#f0f0f0");
		$("#showMy").css("background-color", "#ddd");
		$("#result").load("/core/func/api/games/getMy.php?version=" + version);
		refreshId2 = setInterval(function() {
			$("#result").load("/core/func/api/games/getMy.php?version=" + version);
		}, 15000);
	}else if (id == 3) {
		$("#showPublic").css("background-color", "#f0f0f0");
		$("#showMy").css("background-color", "#f0f0f0");
		$("#showMyS").css("background-color", "#ddd");
		$("#result").load("/core/func/api/games/getMyS.php?version=" + version);
		refreshId3 = setInterval(function() {
			$("#result").load("/core/func/api/games/getMyS.php?version=" + version);
		}, 15000);
	}
}

$(document).ready(function() {
	$("#v3").click(function() {
		$("#showPublic").css("display", "table-cell");
		$("#showMy").css("display", "table-cell");
		$("#showMyS").css("display", "table-cell");
		$("#v0").addClass("active");
		$(".d16").css("display", "table-cell");
		version = 3;
		doCSS(1);
		$("#showPublic").click();
	});
	$("#addServer").click(function() {
		$.post("/core/func/api/games/addKey.php",{key: $("#serverKey").val()}).done(function(data) {
			$("#addKeyResult").html(data);
		}).fail(function() {
			$("#addKeyResult").css("color", "white").html("<div class=\"alert\" style=\"background-color:red;margin-bottom:0px;border-radius:0px;padding:5px;\">Could not add a server to your list because an error occurred.</div>");
		});
	});
	$("#showPublic").click(function() {
		$('#showPublic').attr("disabled", true);
		$('#showMy').attr("disabled", false);
		$('#showMyS').attr("disabled", false);
		doCSS(1);
	});
	$("#showMy").click(function() {
		$('#showPublic').attr("disabled", false);
		$('#showMy').attr("disabled", true);
		$('#showMyS').attr("disabled", false);
		doCSS(2);
	});
	$("#showMyS").click(function() {
		$('#showPublic').attr("disabled", false);
		$('#showMy').attr("disabled", false);
		$('#showMyS').attr("disabled", true);
		doCSS(3);
	});
	
	// Toggle on enter
	$("#serverKey").keyup(function(event) {
		if(event.keyCode == 13) {
			$("#addServer").click();
		}
	})
	
	$("#v3").click();
})

function viewGame(gameID) {
	if (gameID != undefined) {
		$(".gameTitle").html("Loading...");
		$(".gameContent").html('<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i></div>');
		$(".gameContent").load("/core/func/api/games/viewGame.php?id=" + gameID);
		$('.viewGame').modal('show').hide().fadeIn('fast');
	}
}