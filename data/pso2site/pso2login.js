var html = document.getElementById("mainArea").innerHTML;
html = html.replace("ログイン画面","Login Window");
html = html.replace("登録したSEGA IDとPasswordを入力して","Enter your Sega ID and Password and click the");
html = html.replace("ログイン","Login");
html = html.replace("ボタンを押してください。"," button below.");
html = html.replace("パスワード","Password");
html = html.replace("上に表示されている文字を全角ひらがなで入力してください。","Enter the hiragana for the image above for confirmation. <a href=\"javascript:window.open('http://www.lexilogos.com/keyboard/hiragana.htm','popUpWindow','height=520,width=700,left=10,top=10,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no')\"</a>Click to open Hiragana Typewriter</a>");
html = html.replace("画像認証","Hiragana Captcha");
document.getElementById("mainArea").innerHTML = html;

var content = document.getElementById("contents-block").innerHTML;
content = content.replace("パスワード","Password");
content = content.replace("登録したSEGA IDとPasswordを入力して","Enter your Sega ID and Password and click the");
content = content.replace("","");
content = content.replace("","");
document.getElementById("contents-block").innerHTML = content;

document.forms["regist"]["Submit"].value = "Login";



//Package a function to send to the DOM
function override() {

	//store translation data in object array
	translate = {
		'入力情報が不正です': "Entered Information is not correct."
	}

	//backup the alert box function to reuse it (if you want to program your own fancy alery box then go for it, you could probably even use jQuery UI or the chrome built in desktop notifications API, because alert boxes are lame)
	window.alertback = window.alert
	
	//redefine the alert function to pass text into the backup of the original alert function after it's translated
	window.alert = function alert(x) {
	  alertback(translate[x]);
	};

}

//append the script to the DOM and execute it - this breaks through that weird twilight zone seperate from the DOM that chrome extensions operate in
var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ override +')();'));
document.documentElement.appendChild(script);