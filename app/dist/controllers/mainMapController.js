/// <reference path="../_all.ts" />
var D2WMobileCommandCenterMapApp;
(function (D2WMobileCommandCenterMapApp) {
    var MainMapController = /** @class */ (function () {
        function MainMapController($mdDialog, $mdMedia, $mdToast, $window) {
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.$mdToast = $mdToast;
            this.$window = $window;
            var self = this;
        }
        MainMapController.prototype.getGPS = function () {
            var self = this;
        };
        //write message to screen
        MainMapController.prototype.openToast = function (message) {
            this.$mdToast.show(this.$mdToast.simple()
                .textContent(message)
                .position('top right')
                .hideDelay(3000));
        };
        MainMapController.$inject = [
            '$mdDialog',
            '$mdMedia',
            '$mdToast',
            '$window'
        ];
        return MainMapController;
    }());
    D2WMobileCommandCenterMapApp.MainMapController = MainMapController;
})(D2WMobileCommandCenterMapApp || (D2WMobileCommandCenterMapApp = {}));
//# sourceMappingURL=mainMapController.js.map