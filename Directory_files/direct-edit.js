/*Button Code in OU <a id="de" rel="nofollow" href="^0">&copy;</a>*/
function directedit() {
	if(document.getElementById("de") != null && document.getElementById("directedit")) {
		var link = document.getElementById("de").parentNode.innerHTML;
		document.getElementById("de").parentNode.innerHTML = "";
		document.getElementById("directedit").innerHTML = link;
	}
}
window.onload = function() {
	directedit()
};
//jQuery option, if available..
/*$(document).ready(function () {
    $("#directedit").html(jQuery("#de"));
});*/
