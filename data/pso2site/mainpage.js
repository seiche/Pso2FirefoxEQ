var title = document.getElementById("mainArea").innerHTML;
title = title.replace("購入・確認", "PSO2 AC Management");
document.getElementById("mainArea").innerHTML = title;

var html = document.getElementById("contents-block").innerHTML;
html = html.replace("購入・確認", "Manage AC");
html = html.replace("アークスキャッシュ（AC）購入", "Buy Arks Cash");
html = html.replace("ACサービスをご利用いただく際に必要なアークスキャッシュ（AC）を購入します。", "Click the button below to proceed to buy Arks Cash.");
html = html.replace("購入履歴", "Purchase History");
html = html.replace("このSEGA IDでの購入履歴を表示します。", "Click the button below to view past purchases.");
html = html.replace("クレジットカード情報", "Credit Card Information");
html = html.replace("お支払用クレジットカードの設定・変更ができます。クレジットカードの設定をしておくと、購入の際にクレジットカード番号の入力が不要になります。", "Click below to register a credit card. Once a card is registered, it is saved on file and the number does not need ot be entered each time.<br>Note: Credit cards used from outside of Japan will likely not work.");
document.getElementById("contents-block").innerHTML = html;
