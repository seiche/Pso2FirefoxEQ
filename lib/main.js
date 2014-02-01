var prefSet = require("simple-prefs");
var tmr = require('timer');
var ss = require("sdk/simple-storage");
var Request = require("sdk/request").Request;
var data = require("sdk/self").data;
var {Cc, Ci} = require('chrome');
var mediator = Cc['@mozilla.org/appshell/window-mediator;1'].getService(Ci.nsIWindowMediator);
var winUtils = require("window-utils");
var pageMod = require("sdk/page-mod");
//var display = require("sdk/panel");
var btn, timeout;
var ship = "Ship01";
var num = require("sdk/preferences/service").get("pso2_ship");
if(num != null){
	ship = num;
}

if(ss.storage.pso2_ship != null){
	ship = ss.storage.pso2_ship;
}
console.log(ss.storage.pso2_ship);
var notify = false;

var display = require("sdk/panel").Panel({
  width: 430,
  height: 160,
  contentURL: data.url("alert.html"),
  contentScriptFile: data.url("display.js")
});

display.on("show", function(){
	display.port.emit("show", ss.storage.pso2_msg, ss.storage.pso2_img);
});

var icon = require("sdk/widget").Widget({
  label: "Text entry",
  id: "text-entry",
  contentURL: data.url("images/0.png"),
  panel: display
});


/* Options Event Listeners */
prefSet.on("ship", function(prefName){
	ship = prefSet.prefs[prefName];
	require("sdk/preferences/service").set("pso2_ship",ship);
	require("sdk/preferences/service").get("pso2_ship")
	tmr.clearTimeout(timeout);
	console.log("Recalling...");
	callRequest();
});

prefSet.on("notify", function(prefName){
	notify = (prefSet.prefs[prefName] == "yes");
	console.log(notify);
});

/* Twitter Ajax Request */
function callRequest(){
	var request = Request({
  url: "http://arks-layer.com/twitter/getEQ.php?ship="+ship,
  overrideMimeType: "text/plain; charset=latin1",
  onComplete: function (response) {
    var eq = JSON.parse(response.text);

		var date = new Date();
		var start = new Date(eq.from);
		var end = new Date(eq.until);
		
		ss.storage.pso2_img = eq.img;
		ss.storage.pso2_msg = ship + " " + start.toLocaleDateString() + " " + start.getHours() + ":";
		if(start.getMinutes() < 10){
			ss.storage.pso2_msg += "0";
		}
		ss.storage.pso2_msg += start.getMinutes() + "~" + end.getHours() + ":";
		if(end.getMinutes() < 10){
			ss.storage.pso2_msg += "0";
		}
		ss.storage.pso2_msg += end.getMinutes() + "<br>";
		ss.storage.pso2_msg += eq.text;
		console.log(ss.storage.pso2_msg);
		
		var status;
		var delay = 200000;
		
		if(date < start){
			status = 1;
			delay = start - date + 5;
		}else if(date >= start && date <= end){
			status = 2;
			delay = end - date + 5;
		}else{
			status = 0;
		}
		
		if(btn != null){
			btn.setAttribute('image', data.url("images/"+status+".png"));
		}
		if(icon != null){
			icon.contentURL = data.url("images/"+status+".png");
		}
		timeout = tmr.setTimeout(callRequest, delay);
  }
	}).get();
}
callRequest();

/* Toolbar Button */
/*
exports.main = function(options, callbacks) {
	addToolbarButton();
};
 
exports.onUnload = function(reason) {
	removeToolbarButton();
};

function addToolbarButton() {
	var document = mediator.getMostRecentWindow('navigator:browser').document;		
	var navBar = document.getElementById('nav-bar');
	if (!navBar) {
		return;
	}
	btn = document.createElement('toolbarbutton');
	btn.setAttribute('id', 'mybutton-id');
	btn.setAttribute('type', 'button');
	btn.setAttribute('class', 'toolbarbutton-1');
	btn.setAttribute('image', data.url("images/0.png"));
	btn.setAttribute('orient', 'horizontal');
	btn.setAttribute('label', 'Pso2 Addon');
	console.log(btn);
	btn.addEventListener('click', function() {
		display.show();
	}, false);
	navBar.appendChild(btn);
	callRequest();
}
 
function removeToolbarButton() {
	var document = mediator.getMostRecentWindow('navigator:browser').document;		
	var navBar = document.getElementById('nav-bar');
	var btn = document.getElementById('mybutton-id');
	if (navBar && btn) {
		navBar.removeChild(btn);
	}
}
*/

/* Translation Context Scripts */
pageMod.PageMod({
  include: ["https://iway.isao.net/sega/mail_sr.cgi?*", "https://iway.isao.net/sega/dupcheck*", "https://iway.isao.net/sega/dcws_signup*"],
	contentScriptFile: data.url("pso2site/signup.js")
});

pageMod.PageMod({
  include: ["https://iway.isao.net/sega/sign_end.cgi*"],
	contentScriptFile: data.url("pso2site/confirmation.js")
});

pageMod.PageMod({
  include: ["https://cha.isao.net/profile_oem/OEMProductMenu.php"],
	contentScriptFile: data.url("pso2site/productmenu.js")
});

pageMod.PageMod({
  include: ["https://cha.isao.net/profile_oem/OEMPrdRegistConfirm.php"],
	contentScriptFile: data.url("pso2site/pso2confirm.js")
});

pageMod.PageMod({
  include: ["https://cha.isao.net/profile_oem/OEMPrdRegistCode.php"],
	contentScriptFile: data.url("pso2site/pso2complete.js")
});

pageMod.PageMod({
  include: ["https://cha.isao.net/purchase_oem/OEMChk.php"],
	contentScriptFile: data.url("pso2site/payinput.js")
});

pageMod.PageMod({
  include: ["https://cha.isao.net/profile_oem/OEMLogin.php?product_name=pso2", "https://cha.isao.net/profile_oem/OEMLogin.php?product_name=sega"],
	contentScriptFile: data.url("pso2site/pso2login.js")
});

pageMod.PageMod({
  include: ["http://www.lexilogos.com/keyboard/hiragana.htm"],
	contentScriptFile: data.url("pso2site/typewriter.js")
});

pageMod.PageMod({
  include: ["https://cha.isao.net/profile_oem/OEMAuthChk.php", "https://cha.isao.net/profile_oem/OEMUsrPrfMenu.php"],
	contentScriptFile: data.url("pso2site/mainpage.js")
});

pageMod.PageMod({
  include: ["https://cha.isao.net/purchase_oem/OEMTmpl2Show2.php"],
	contentScriptFile: data.url("pso2site/pso2paymenu.js")
});
