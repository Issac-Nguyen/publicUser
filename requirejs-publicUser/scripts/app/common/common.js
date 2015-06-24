define([], function() {
	var pixelRatio = window.devicePixelRatio || 1;
	var windowWidth = window.innerWidth * pixelRatio;
	var windowHeight = window.innerHeight * pixelRatio;

	return {
		pixelRatio: pixelRatio,
		windowWidth: windowWidth,
		windowHeight: windowHeight
	}
});