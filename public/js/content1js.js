window.addEventListener('load', function () {
	var text = document.getElementsByClassName("text")[0];
	console.log(text);

	var p = null;
	for (var i = 0; i < text.childNodes.length; i++) {
		var child = text.childNodes[i];
	    child.style.top = "33px";    
	}
});