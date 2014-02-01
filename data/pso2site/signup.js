var html = document.getElementById("contents-block").innerHTML;
html = html.replace("個人情報入力", "Input Personal Information");
html = html.replace("以下の情報をご入力ください。", "Please enter your info in the form below.");
html = html.replace("なお、虚偽の個人情報で登録された方は、SEGA IDの利用を停止させていただく場合がございますので、内容を正確にご入力ください。", "Because of unauthorized access, there maybe cases where service to your Sega ID is temporarily disabled.");
html = html.replace("なお、虚偽の個人情報で登録された方は、SEGA IDを停止させていただく場合がございますので、内容を正確にご入力ください。", "Because of unauthorized access, there maybe cases where service to your Sega ID is temporarily disabled.");
html = html.replace("", "");
html = html.replace("※申し訳ありませんが、本ページではJavaScriptが必要です。JavaScriptを使用可能にして、ページを再表示してください。", "This page requires javascript. Please make sure javascript is enabled in your browser.");
html = html.replace("生年月日の入力", "Input your birthday");
html = html.replace("生年月日を入力", "Input your birthday");
html = html.replace("生年月日：", "Year: ");
html = html.replace("年", "Month: ");
html = html.replace("月", "Day: ");
html = html.replace("日", "");
html = html.replace("*(例)1980年01月01日", "Ex. 1980/12/31");
html = html.replace("ご希望のSEGA IDを入力", "Sega ID Registration");
html = html.replace("(半角英数字6～30文字)", "");
html = html.replace("※6～30文字の半角英数字で入力してください。", "※Please use between 6 and 30 alphabetical characters.");
html = html.replace("半角英字は大文字・小文字を区別せず、必ず小文字で登録されます。", "Cases is ignored, all ID's will be registered as lower-case.");
html = html.replace("また、IDの先頭の文字は半角英字を設定する必要があります。", "Also, the first character must be alphabetical.");
html = html.replace("※この登録を途中で終了する場合、同じIDではすぐに再登録できない場合があります。再登録をご希望の際は、別のIDで、再度登録してください。", "※If this registration is terminated mid-way, it may not be possible to register with the same name. In that case, please register with a new name.");
html = html.replace("ご希望のパスワードを入力", "Input Password");
html = html.replace("(半角英数字8～16文字)", "");
html = html.replace("パスワード：", "Password:");
html = html.replace("（再入力）パスワード：", "Confirm Password:");
html = html.replace("※8～16文字の半角英数字（半角数字を1つ以上、半角英字を2つ以上含む）を入力してください。", "※Password must be between 8 and 16 character containing atleast one number and at least 2 letters respectively.");
html = html.replace("IDと同じ文字列が含まれるパスワードを登録することはできません。", "Password cannot be the entered Sega ID.");
html = html.replace("半角英字の大文字と小文字は区別されます。", "Password is case-sensitive");
html = html.replace("秘密の質問", "Secret Question");
html = html.replace("質問を選択してください：", "Select a Question:");
html = html.replace("質問の答え：", "Secret Answer:");
html = html.replace("※1～64文字で入力してください。", "Please enter between 1 and 64 letters.");
html = html.replace("半角カナおよび「-」以外の記号は使用できません。", "A hyphen (-) cannot be used in the answer.");
html = html.replace("SEGAからのお知らせ", "Sega Newletter");
html = html.replace("お知らせを受け取る", "Receive news letter from Sega");
html = html.replace("サービスに関するお知らせ、メールマガジン等を連絡先メールアドレス宛にお送りいたします。", "Includes information on updates and campaigns (JP version)");
html = html.replace("SEGA ID登録完了後に受け取るかどうかを変更することも可能です。", "Options on Sega Newsletter can be chnaged after registration is complete.");
html = html.replace("画像認証", "Image Confirmation");
html = html.replace("上に表示されている文字を全角ひらがなで入力してください。", "Please write kana for the characters above. <a href=\"javascript:window.open('http://www.lexilogos.com/keyboard/hiragana.htm','popUpWindow','height=520,width=700,left=10,top=10,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no')\">Hiragana Typewriter</a> (Opens in new Window)");
document.getElementById("contents-block").innerHTML = html;

var selectHTML = document.forms["usrinfo"]["secret_question"].innerHTML;
selectHTML = selectHTML.replace("通っていた幼稚園（保育園）の名前は？","Name of your kindergarden?");
selectHTML = selectHTML.replace("生まれた町名は？","Name of the town you grew up in?");
selectHTML = selectHTML.replace("最初に乗った車の車種は？","Type of car you first owned?");
selectHTML = selectHTML.replace("子供の頃の憧れの選手は？","Name of person you idolized as a kid?");
selectHTML = selectHTML.replace("初恋の人のファーストネームは？","Name of your first boy/girl friend?");
selectHTML = selectHTML.replace("最初に飼ったペットの名前は？","Name of your first pet?");
selectHTML = selectHTML.replace("中学校三年生の時の担任は？","Name of your home room teacher in school?");
document.forms["usrinfo"]["secret_question"].innerHTML = selectHTML;
document.forms["usrinfo"]["Submit"].value = "Submit";

//Package a function to send to the DOM
function override() {

	//store translation data in object array
	translate = {
		'姓に全額文字以外が含まれています': "Last name is not full-width characters",
		'名に全額文字以外が含まれています': "First name is not full-width characters",
		'姓（カナ）が全角カタカナではありません': "Last name(kana) is not full-width katakana",
		'名（カナ）が全角カタカナではありません': "First name(kana) is not full-width katakana",
		'住所に都道府県が入力されていません': "Entered address does not include a valid prefecture",
		'住所に許容されていない半角記号が入力されてます': "Half-width numbers cannot be used in address field",
		'電話番号が半角数字ではありません': "Phone number must be half-width numbers",
		'連絡先メールアドレスが入力されていません': "Mail Address has not been entered",
		'連絡先メールアドレスの書式が不正です': "Email address has not been entered correctly"
	}

	//backup the alert box function to reuse it (if you want to program your own fancy alery box then go for it, you could probably even use jQuery UI or the chrome built in desktop notifications API, because alert boxes are lame)
	window.alertback = window.alert
	
	//redefine the alert function to pass text into the backup of the original alert function after it's translated
	window.alert = function alert(x) {

		msg = translate[x];  //call array only once
		if(msg == "undefined"){
			alertback('Could not translate: /n' + x + '/n/nPlease report this on PSO-World. See web console (CTRL + SHIFT + J) to copy the Japanese text'); //Translation not found, give the original message with instructions
			console.log('Could not translate: /n' + x);
		}else{
			alertback(msg); //Translation found, use translate message
		}
	};

}

//append the script to the DOM and execute it - this breaks through that weird twilight zone seperate from the DOM that chrome extensions operate in
var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ override +')();'));
document.documentElement.appendChild(script);
