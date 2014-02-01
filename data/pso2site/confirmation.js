var html = document.getElementById("contents-block").innerHTML;
html = html.replace("サービス利用登録へ", "Register For Service");
html = html.replace("SEGA ID新規登録作業が完了しました。", "Sega ID Registration is complete. ");
html = html.replace("引き続き、サービス利用登録を行って下さい。", "Please confirm which service you would like to use.");
html = html.replace("※ご登録いただいたIDでサービスを利用するためには、", "※In order to utilize your Sega ID,");
html = html.replace("各サービス利用登録が必要となります。", "it must be registered with a specific service.");
html = html.replace("また、連絡先メールアドレスへ、お客様のSEGA IDを送信いたしましたので、ご確認ください。", "Additional information has been sent to the email you registered with.");
html = html.replace("※混雑時にはメールが届くまでお待ち頂くことがあります。", "※It may take some time before the email is sent.");
document.getElementById("contents-block").innerHTML = html;

document.forms["regist"]["submit"].style.padding = "5px";
document.forms["regist"]["submit"].value = "Click Here to Register for PSO2 JP";