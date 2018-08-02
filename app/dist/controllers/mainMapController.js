/// <reference path="../_allMap.ts" />
var D2WMobileCommandCenterMapApp;
(function (D2WMobileCommandCenterMapApp) {
    var MainMapController = /** @class */ (function () {
        function MainMapController(
        //private myMap: ngMap;
        ) {
            var self = this;
            self.name = "MainMapController";
            self.options = {
                center: { lat: 41.0362643, lng: -74.3704765 },
                scrollwheel: false,
                zoom: 8
            };
            var mapElement = document.getElementById('map');
            self.map = new google.maps.Map(mapElement, self.options);
        }
        MainMapController.prototype.getGPS = function () {
            var self = this;
        };
        MainMapController.$inject = ['ngMap'];
        return MainMapController;
    }());
    D2WMobileCommandCenterMapApp.MainMapController = MainMapController;
})(D2WMobileCommandCenterMapApp || (D2WMobileCommandCenterMapApp = {}));
//# sourceMappingURL=mainMapController.js.map