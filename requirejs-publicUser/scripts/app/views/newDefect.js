define(['kendo', '../phonegap/phonegap'], function(kendo, phonegap) {
    return {
        init: function(initEvt) {
            // ... init event code ...
            $("#listImage").kendoMobileListView({
                                                    dataSource: kendo.data.DataSource.create({data: [{dataURL: '1'}]}),
                                                    template: "${dataURL}",
                                                });
        },

        beforeShow: function(beforeShowEvt) {
            // ... before show event code ...
        },

        show: function(showEvt) {
            // ... show event code ...
        },

        viewModel: kendo.observable({
                                        message: 'new Defect',
                                        source: [],
                                        addImage: function() {
                                            var self = this;
                                            //phonegap.capturePicture(function(dataURL){
                                            //    self.source.push({dataURL: dataURL});
                                            //});
                                            $("#listImage").data("kendoMobileListView").dataSource.add({dataURL: '2'});
                                        }
                                    }),
    }
});