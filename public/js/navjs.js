window.addEventListener('load', function () {
	var prevPagePosition = window.pageYOffset;
	var navBar = document.getElementsByTagName("nav")[0];
	var navBarHeight = navBar.offsetHeight;

	window.onscroll = function() {
		var currentPagePosition = window.pageYOffset;
		if (currentPagePosition > prevPagePosition) {
			navBar.style.top = "-" + navBarHeight + "px";
		} else {
			navBar.style.top = "0";
		}
		prevPagePosition = currentPagePosition;

		if (navBarHeight > navBarHeight/2 && currentPagePosition >= navBarHeight) {
			navBar.style.backgroundColor = "#fff";
			navBar.style.color = "#67788a";
		} else {
			navBar.style.backgroundColor = "#FCEBEB";
			navBar.style.color = "#000"
		}
	}

});



