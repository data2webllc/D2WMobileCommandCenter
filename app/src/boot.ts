/// <reference path="_all.ts" />

module D2WMobileCommandCenterApp {
    angular.module('D2WMobileCommandCenter', ['ngMaterial', 'shagstrom.angular-split-pane', 'smart-table', 'ngMessages', 'ang-drag-drop'])
        .service('userService', UserService)
        .service('workService', WorkService)
        .controller('mainController', MainController)
        .config(($mdThemingProvider: angular.material.IThemingProvider) => {
            $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('teal');
        });
}