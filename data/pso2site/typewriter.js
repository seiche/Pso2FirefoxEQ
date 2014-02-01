document.body.removeChild(document.getElementById("ca"));
document.body.removeChild(document.getElementById("cb"));
document.body.removeChild(document.getElementById("cc"));
document.body.removeChild(document.getElementById("cd"));
document.body.removeChild(document.getElementById("pa"));
document.body.removeChild(document.getElementById("espb"));
document.body.removeChild(document.getElementById("espb"));
document.body.removeChild(document.getElementById("espb"));
document.body.removeChild(document.getElementById("bab"));
document.body.removeChild(document.getElementById("bab"));
document.getElementById("ce").style.top = "5px";
document.getElementById("ce").style.right = "75px";

var array = document.getElementsByTagName("iframe");
document.body.removeChild(array[0]);
var div = document.getElementsByTagName("div")[2];
document.getElementsByName("select")[0].style.display = "none";

document.forms["conversion"]["saisie"].rows = "1";
document.forms["conversion"]["saisie"].style.marginTop = "2px";
document.forms["conversion"]["saisie"].style.resize = "none";