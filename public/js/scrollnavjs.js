window.addEventListener('load', function () {
	
	var scroll = document.getElementsByClassName("scroll")[0];
	var scrolling = document.getElementsByClassName("scrolling");

	setWidthDimension(scroll, setWidth(scrolling));
	setHeightDimension(scroll, setHeight(scrolling));

	initialPosition(scrolling, setHeight(scrolling));

	setInterval(function(){
			movePostion(scrolling, setHeight(scrolling));
			resetPosition(scrolling);
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

	function setWidthDimension(element, size) {
		element.style.width = size + "px";
	}

	function setHeightDimension(element, size) {
		element.style.height = size + "px";
	}

	function initialPosition(array, height) {
		for (i = 0; i < array.length; i++) {
			array[i].style.top = height * i + "px";
			// array[i].aniamte([{ top : height * i + "px"}],{duration: 1000});
		}
	};

	function movePostion(array, height) {
		for (i = 0; i < array.length; i++) {
			array[i].style.top = array[i].offsetTop - height + "px";
			// array[i].aniamte([{ top : array[i].offsetTop - height + "px"}],{duration: 1000});
		}
	};

	function resetPosition(array) {
		if(array[0].offsetTop == - setHeight(array) * array.length) {
			initialPosition(array, setHeight(array));
		} ;
	};
});