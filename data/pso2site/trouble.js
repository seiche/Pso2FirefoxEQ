﻿var html = document.getElementById("contentsArea").innerHTML;
html = html.replace("不具合報告", "Error Report Form");
html = html.replace("このフォームでは『ファンタシースターオンライン2』で発生した不具合報告を受け付けております。", "This form is for reporting problems that occur in Phantasy Tar Online 2.");
html = html.replace("ご報告の前に", "Before submitting this form, please read ");
html = html.replace("「サポート」トップページ", "the support top page");
html = html.replace("より、", ", ");
html = html.replace("よくあるご質問", "the FAQ");
html = html.replace("や", " and ");
html = html.replace("対応状況リスト", "the list of common errors and fixes ");
html = html.replace("をご確認ください。", "to see if your question is addresses in there.");
html = html.replace("ご投稿いただいた直後に、記入いただいたメールアドレスへ確認となるメールを自動で返信いたします。確認メールが届かないときは投稿が受け付けられておりませんので、入力されたメールアドレスをご確認の上、再度ご投稿いただきますようお願いいたします。", "You should receive an automatic email confirming that your form has been sent.");
html = html.replace("いただいた不具合報告には、それぞれ調査を行わせていただきますが、個別の返信は、原則として行っておりません。", "We will look into the matter but by principle we don not respond to every individual request.");
html = html.replace("メールアドレス", "Email Address");
html = html.replace("メールアドレスをブラウザに保存する", "Save email address in this browser.");
html = html.replace("プレミアムセット有効期間内の場合は、チェックを入れてください。", "Check this box if you are currently using premium.");
html = html.replace("プレミアムセット", "Premium Set");
html = html.replace("カテゴリー選択", "Select Category");
html = html.replace("選択してください", "Select an error");
html = html.replace("SEGA ID関連", "Sega ID related");
html = html.replace("インストール・ゲーム起動関連", "Installation/Game Start up problem");
html = html.replace("タイトル画面関連", "Title screen related");
html = html.replace("ログイン関連", "Login Related");
html = html.replace("操作方法・システム関連", "Control/System related");
html = html.replace("キャラクター・成長・アクション関連", "Character/Action Related");
html = html.replace("エネミー関連", "Enemy Related");
html = html.replace("アイテム・メセタ関連", "Item/Meseta Related");
html = html.replace("武器・装備品関連", "Weapon/Equipment releated");
html = html.replace("クエスト関連", "Quest Related");
html = html.replace("チャット・コミュニケーション関連", "Chat/Communication related");
html = html.replace("ロビー・ショップ関連", "Lobby Action Related");
html = html.replace("マイルーム・マイショップ関連", "My room/My shop related");
html = html.replace("公式サイト関連", "About the official site");
html = html.replace("動作環境/環境設定関連", "Game Settings");
html = html.replace("チーム関連", "Team Related");
html = html.replace("ACサービス・FUN関連", "AC Service/FUN Related");
html = html.replace("その他", "Other");
html = html.replace("複数のShipにキャラクターがいる場合、症状を確認した際に実際にプレイしていたShipを数字で入力してください。", "If you have characters on several ships, please only provide the number of the ship with the problem in question.");
html = html.replace("キャラクタークリエイト前の症状などの場合、「不明」と入力してください。", "If your problem is occuring before that point, <a href=''>Click here</a>");
html = html.replace("症状を確認した際に実際にプレイしていたBlockを数字で入力してください。", "Enter the block number of the error in question.");
html = html.replace("Blockが確認できない場合、「不明」と入力してください。", "If the block cannot be determined, <a href=''>Click here</a>");
html = html.replace("プレイヤーIDネーム", "Player ID Name");
html = html.replace("プレイヤーID", "Player ID");
html = html.replace("プレイヤーごとの固有の数字です。", "This should be the number that is associated with your player ID.");
html = html.replace("キャラクター名", "Character Name");
html = html.replace("エラーナンバー", "Error Number");
html = html.replace("エラーメッセージ", "Error Message");
html = html.replace("記入例：「サーバーからの応答がなくなったため、ゲームを終了します」など", "The context of the error message in Japanese. If you need help, go <a href='http://www.pso-world.com/forums/showthread.php?t=204836'>here</a>");
html = html.replace("", "");
html = html.replace("", "");
html = html.replace("", "");
html = html.replace("", "");

while(html.indexOf("必須") > 0){
	html = html.replace("必須", "Req.");
}

document.getElementById("contentsArea").innerHTML = html;