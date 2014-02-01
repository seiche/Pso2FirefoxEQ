var link = document.getElementById("category").innerHTML;
link = link.replace("システム","System");
link = link.replace("スキルツリー","Skill Tree");
link = link.replace("マグ","Mag");
link = link.replace("回復","Healing");
link = link.replace("ブーストアイテム","Boost Item");
link = link.replace("エステ","Salon Shop");
link = link.replace("スクラッチ","AC Scratch");
document.getElementById("category").innerHTML = link;

var html = document.getElementById("system").innerHTML;
html = html.replace("プレミアムセット３０日","プレミアムセット３０日 / Premium Set: 30 Days");
html = html.replace("プレミアムセット６０日","プレミアムセット６０日 / Premium Set: 60 Days");
html = html.replace("プレミアムセット９０日","プレミアムセット９０日 / Premium Set: 90 Days");
html = html.replace("マイルーム利用３０日","マイルーム利用３０日 / My Room Pass: 30 Days");
html = html.replace("マイショップ出店３０日","マイショップ出店３０日 / My Shop Pass: 30 Days");
html = html.replace("拡張倉庫１利用３０日","拡張倉庫１利用３０日 / Item Storage Expansion 1: 30 Days");
html = html.replace("拡張倉庫１利用９０日","拡張倉庫１利用９０日 / Item Storage Expansion 1: 90 Days");
html = html.replace("拡張倉庫２利用３０日","拡張倉庫２利用３０日 / Item Storage Expansion 2: 30 Days");
html = html.replace("拡張倉庫２利用９０日","拡張倉庫２利用９０日 / Item Storage Expansion 2: 90 Days");
html = html.replace("拡張倉庫３利用３０日","拡張倉庫３利用３０日 / Item Storage Expansion 3: 30 Days");
html = html.replace("拡張倉庫３利用９０日","拡張倉庫３利用９０日 / Item Storage Expansion 3: 90 Days");
html = html.replace("アイテムパック拡張１０","アイテムパック拡張１０ / Item Pack 10 Slot Expansion");
html = html.replace("アイテムパック拡張最大セット","アイテムパック拡張最大セット / Item Pack Max Capacity Set");
html = html.replace("キャラクター作成権","キャラクター作成権 / Character Create Ticket");
html = html.replace("シップ移動権","シップ移動権 / Ship Transfer Ticket");

html = html.replace("","");

while(html.indexOf("ジャンル") > 0){
	html = html.replace("ジャンル","Genre");
}
while(html.indexOf("価格") > 0){
	html = html.replace("価格","Cost");
}
while(html.indexOf("システム") > 0){
	html = html.replace("システム","System");
}
while(html.indexOf("スキルツリー") > 0){
	html = html.replace("スキルツリー","Skill Tree");
}
while(html.indexOf("回復") > 0){
	html = html.replace("回復","Recovery");
}
document.getElementById("system").innerHTML = html;

var html = document.getElementById("skilltree").innerHTML;
html = html.replace("スキルツリー追加パス","スキルツリー追加パス / Additional Skill Tree Pass");
html = html.replace("追加ツリーリセットパス","追加ツリーリセットパス / Skill Tree Reset Pass");
document.getElementById("skilltree").innerHTML = html;

var html = document.getElementById("mag").innerHTML;
html = html.replace("マグ獲得チケット","マグ獲得チケット / Additional Mag Ticket");
html = html.replace("マグリセットデバイス","マグリセットデバイス / Mag Reset Device");
document.getElementById("mag").innerHTML = html;

var html = document.getElementById("recovery").innerHTML;
html = html.replace("スケープドール（１個）","スケープドール（１個） / Scapedoll (x1)");
html = html.replace("スケープドール（３個）","スケープドール（３個） / Scapedoll (x3)");
html = html.replace("スケープドール（５個）","スケープドール（５個） / Scapedoll (x5)");
html = html.replace("コスモアトマイザー（３個）","コスモアトマイザー（３個） / Cosmo-Atomizer (x3)");
html = html.replace("コスモアトマイザー（５個）","コスモアトマイザー（５個） / Cosmo-Atomizer (x5)");
document.getElementById("recovery").innerHTML = html;

var html = document.getElementById("boostitem").innerHTML;
html = html.replace("獲得経験値＋１００％（３個）","獲得経験値＋１００％（３個） / Exp Boost Ticket +100%(x3)");
html = html.replace("獲得経験値＋１００％（１０個）","獲得経験値＋１００％（１０個） / Exp Boost Ticket +100%(x10)");
html = html.replace("レアドロップ倍率＋１５０％（３個）","レアドロップ倍率＋１５０％（３個） / Rare Drop Chance +150%(x3) Ticket");
document.getElementById("boostitem").innerHTML = html;

var html = document.getElementById("este").innerHTML;
html = html.replace("エステ利用パス","エステ利用パス / Salon Shop Pass");
document.getElementById("este").innerHTML = html;

var html = document.getElementById("scratch").innerHTML;
html = html.replace("ＡＣスクラッチ券（１１個）","ＡＣスクラッチ券（１１個） / AC Scratch Ticket(x11)");
html = html.replace("ＡＣスクラッチゴールド券（１１個）","ＡＣスクラッチゴールド券（１１個） / AC Scratch Ticket Gold(x11)");
document.getElementById("scratch").innerHTML = html;