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

	function initialPosition(array) {
		for (i = 0; i < array.length; i++) {
			array[i].style.top = height*i + "px";
		}
	};

	initialPosition(scrolling);

	scroll.style.height = height + "px";
	scroll.style.width = width + "px";

	setInterval(function(){
		scrolling = Array.from(scrolling);
		scrolling.forEach(function(item){
			item.style.top = (item.offsetTop - height) + "px";
			if(scrolling[0].offsetTop == -height*scrolling.length) {
				initialPosition(scrolling);
				// var lastItemIndex = scrolling.length - 1;
				// var lastItem = scrolling[lastItemIndex];
				// var lastItemPosition = lastItem.offsetTop;

				// var firstItem = scrolling[0];
				// firstItem.style.top = lastItemPosition + height + "px";


				// scrolling.push(scrolling.shift());

				// var lastItem = scrolling[scrolling.length -1];
				// item.style.top = (lastItem.offsetTop + height) + "px";
			} ;
		});
	}, 1000);
});