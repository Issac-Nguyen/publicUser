define(['kendo', '../phonegap/phonegap'], function(kendo, phonegap) {
	return {
		init: function(initEvt) {
			// ... init event code ...
		},

		beforeShow: function(beforeShowEvt) {
			// ... before show event code ...
		},

		show: function(showEvt) {
			// ... show event code ...
		},

		viewModel: kendo.observable({
			message: 'new Defect',
			addImage: function() {
				phonegap.capturePicture();
			}
		}),
	}
});