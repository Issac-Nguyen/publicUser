define(['jQuery', 'kendo', './template/baseTemplate', './defect'], function($, kendo, baseTemplate, defectView) {
	var groupedData = [{
		name: "foo",
		description: 'des foo'
	}, {
		name: "bar",
		description: 'des bar'
	}, {
		name: "baz",
		description: 'des baz'
	}];
	return {
		init: function(initEvt) {
			$("#listDefects").kendoMobileListView({
				dataSource: groupedData,
				template: baseTemplate.templateDefect,
				filterable: {
					field: "name"
				},
				click: function(e) {
					var item = e.dataItem;
					defectView.setDataDetailToView(item);
				}
			});
		},

		beforeShow: function(beforeShowEvt) {
			// ... before show event code ...
		},

		show: function(showEvt) {
			// ... show event code ...
		},

		viewModel: kendo.observable({
			message: 'defects',
            clickNew: function(e) {
                 $("#modalview-login").kendoMobileModalView("open");
            }
		}),
	}
});