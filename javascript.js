
function Email() {
var email = 'walter.cavallaro01@gmail.com';
var oggetto = document.modulo.oggetto.value;
var messaggio = document.modulo.messaggio.value;

if ((oggetto == "") || (oggetto == "undefined")) {
alert("Inserire un oggetto.");
document.modulo.oggetto.focus();
}
else if ((messaggio == "") || (messaggio == "undefined")) {
alert("Inserire un messaggio.");
document.modulo.messaggio.focus();
}
else {
location.href = "mailto:" + email + "?Subject=" + oggetto + "&Body=" + messaggio;
}
}
