/// <reference path="_all.ts" />
var D2WMobileCommandCenterApp;
(function (D2WMobileCommandCenterApp) {
    angular.module('D2WMobileCommandCenter', ['ngMaterial', 'shagstrom.angular-split-pane', 'smart-table', 'ngMessages', 'ang-drag-drop'])
        .service('userService', D2WMobileCommandCenterApp.UserService)
        .service('workService', D2WMobileCommandCenterApp.WorkService)
        .controller('mainController', D2WMobileCommandCenterApp.MainController)
        .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('teal');
    });
})(D2WMobileCommandCenterApp || (D2WMobileCommandCenterApp = {}));
//# sourceMappingURL=boot.js.map