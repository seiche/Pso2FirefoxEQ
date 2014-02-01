var html = document.getElementById("mainArea").innerHTML;
html = html.replace("『ファンタシースターオンライン２』を開始する準備が整いました。", "Registration for Phantasy Star Online 2 is Complete!");
html = html.replace("ゲームを起動してログイン画面に進んで下さい。", "You can now log in to the game using your Sega ID.");
html = html.replace("PC版クライアントをダウンロードする場合はこちらへお進み下さい。", "The PC client can be downloaded <a href=\"http://pso2.jp/players/download/\">here</a><br>Note: the buttons below this say, \"Goto player Site\" and \"Logout\"");
document.getElementById("mainArea").innerHTML = html;