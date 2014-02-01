var html = document.getElementById("mainArea").innerHTML;
html = html.replace("すでにサービス利用登録は完了しています。", "Registration is already complete for this ID.");
html = html.replace("再度サービス利用登録をする必要はありません。", "Session may have expired, click ｢返る」 to go back or 「ログアウト」 to logout.");
html = html.replace("エラー", "Error");
document.getElementById("mainArea").innerHTML = html;