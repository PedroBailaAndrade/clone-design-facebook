window.addEventListener('load', function () {
	var scroll = document.getElementsByClassName("scroll")[0];
	var fixedHeight = document.getElementsByClassName("fixed")[0].offsetHeight;
	
	var scrolling = document.getElementsByClassName("scrolling");
	var width = [];
	var height = [];

	for (i = 0; i < scrolling.length; i++) {
		width.push(scrolling[i].offsetWidth);
		height.push(scrolling[i].offsetHeight);
	}
	width = Math.max(...width);
	height = Math.max(...height);

	for (i = 0; i < scrolling.length; i++) {
		scrolling[i].style.top = height*i + "px";
	}

	scroll.style.height = height + "px";
	scroll.style.width = width + "px";

	setInterval(function(){
		scrolling = Array.from(scrolling);
		scrolling.forEach(function(item){
			item.style.top = (item.offsetTop - height) + "px";
			if(item.offsetTop == -height) {
				console.log('oi');
				// var lastItem = scrolling[scrolling.length -1];
				// item.style.top = (lastItem.offsetTop + height) + "px";
			} ;
		});
	}, 1000);
});