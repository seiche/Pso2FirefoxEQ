var html = document.getElementById("mainArea").innerHTML;
html = html.replace("『ファンタシースターオンライン2』のサービス利用登録を行います。", "Confirmation for usage of Phantasy Star Online 2 Service");
html = html.replace("下記の利用規約をご一読いただき、同意される場合は「利用規約に同意して登録」ボタンをクリックしてください。", "Read the terms of service below. If you agree, plese check the box and click the confirmation button.");
html = html.replace("利用規約に同意する", "I agree to the terms of service.");
document.getElementById("mainArea").innerHTML = html;

document.forms["form"]["submit"].value = "Now let me play the game!";
document.forms["form"]["back"].value = "Cancel";
document.forms["form"]["rule"].value = "Open Terms in new window";