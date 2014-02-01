var html = document.getElementById("contents-block").innerHTML;
html = html.replace("登録情報へ", "Edit Personal Information");
html = html.replace("現在、ご利用可能なサービスの一覧です。", "This is a list of available services offered by Sega.");
html = html.replace("「サービス利用登録」を行うと、該当のサービスをご利用のIDで利用できるようになります。", "Clicking [サービス利用登録] for a service will allow you to use that service with your Sega ID.");
html = html.replace("ファンタシースターオンライン2", "Phantasy Star Online 2");
document.getElementById("contents-block").innerHTML = html;