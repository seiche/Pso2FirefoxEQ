	//﻿var ss = require("sdk/simple-storage");	
	/*
	document.addEventListener('DOMContentLoaded',function(){
		document.getElementById("main").innerHTML = "testing";
		var image = document.getElementById("eq_img");
		var textbox = document.getElementById("eq_text");
		image.src = ss.storage.pso2_img;
		textbox.innerHTML = ss.storage.pso2_msg;
	});
	*/
	
	self.port.on("show", function (msg, img) {
		var image = document.getElementById("eq_img");
		image.src = img;
		var textbox = document.getElementById("eq_text");
		textbox.innerHTML = msg;
		
	});
