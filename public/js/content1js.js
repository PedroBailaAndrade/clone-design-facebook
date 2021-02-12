window.addEventListener('load', function () {
	var text = document.getElementsByClassName("text")[0];

	for (i = 0; i < text.children.length; i++) {
		var child = text.children[i];
		child.style.animationName = "fadeInBottom";
		child.style.animationDuration = (1+i)/4 + "s";
		child.style.animationTimingFunction = "linear"
		child.style.animationIterationCount = "1";
    	child.style.animationPlayState = "running";
    	child.style.animationFillMode = "forwards";
	} 
});