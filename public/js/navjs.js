window.addEventListener('load', function () {
	var prevPagePosition = window.pageYOffset;
	var navBar = document.getElementsByTagName("nav")[0];
	var navBarHeight = navBar.offsetHeight;
	
	window.onresize = function() {
		navBarHeight = navBar.offsetHeight;
	};

	navBar.classList.add('down');

	function enableScroll() { 
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
				if (navBar.classList.contains('down')) {
					navBar.classList.remove('down');
					navBar.classList.add('up');
				};
			} else {
				navBar.style.backgroundColor = "#FCEBEB";
				navBar.style.color = "#000"
				if (navBar.classList.contains('up')) {
					navBar.classList.remove('up');
					navBar.classList.add('down');
				};
			};
		};
	};

	enableScroll();

	var tabMenu = navBar.getElementsByClassName("tab-menu")[0];
	var tabMenuChild = navBar.getElementsByClassName("tab-menu-child")[0];
	var close = tabMenuChild.getElementsByClassName("close-menu")[0];

	tabMenu.onclick = function() {
		tabMenuChild.style.display = "block";
		disableScroll();
	};

	close.onclick = function() {
		tabMenuChild.style.display = "none";
		enableScroll();
		var body = document.getElementsByTagName("body")[0];
    	body.style.overflow = "auto";
	};

	function disableScroll() { 
		scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; 

        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        };

        var body = document.getElementsByTagName("body")[0];
    	body.style.overflow = "hidden";
    };

});



