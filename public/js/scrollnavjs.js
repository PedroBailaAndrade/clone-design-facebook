window.addEventListener('load', function () {
	
	var scroll = document.getElementsByClassName("scroll")[0];
	var scrolling = document.getElementsByClassName("scrolling");

	setDimension(scroll, string(width), setWidth(scrolling));
	setDimension(scroll, string(height), setHeight(scrolling));

	initialPosition(scrolling, setHeight(scrolling));

	setInterval(function(){
			movePostion(scrolling, setHeight(scrolling));
			if(scrolling[0].offsetTop == - setHeight(scrolling) * scrolling.length) {
				initialPosition(scrolling, setHeight(scrolling));
			} ;
	}, 1000);

	function setWidth(array) {
		var values = [];
		for (i = 0; i < array.length; i++) {
			values.push(array[i].offsetWidth);
		}
		return value = Math.max(...values);
	};

	function setHeight(array) {
		var values = [];
		for (i = 0; i < array.length; i++) {
			values.push(array[i].offsetHeight);
		}
		return value = Math.max(...values);
	};

	function setDimension(element, side, size) {
		element.style.side = size + "px";
		console.log(element.style.side = size+ "px")
	}

	function initialPosition(array, height) {
		for (i = 0; i < array.length; i++) {
			array[i].style.top = height * i + "px";
		}
	};

	function movePostion(array, height) {
		for (i = 0; i < array.length; i++) {
			array[i].style.top = array[i].offsetTop - height + "px";
		}
	};
});