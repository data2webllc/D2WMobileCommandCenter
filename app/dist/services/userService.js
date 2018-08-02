/// <reference path="../_all.ts" />
var D2WMobileCommandCenterApp;
(function (D2WMobileCommandCenterApp) {
    var UserService = /** @class */ (function () {
        function UserService($http) {
            this.$http = $http;
            //private serverUrl = "http://localhost:53077/";
            this.serverUrl = "http://d2wmobile.azurewebsites.net/";
            this.selectedUser = null;
        }
        UserService.prototype.loadAllUsers = function () {
            var results = this.$http.get(this.serverUrl + '/api/PeopleFieldUser')
                .then(function (response) { return response.data; });
            return results;
        };
        UserService.$inject = ['$http'];
        return UserService;
    }());
    D2WMobileCommandCenterApp.UserService = UserService;
})(D2WMobileCommandCenterApp || (D2WMobileCommandCenterApp = {}));
//# sourceMappingURL=userService.js.map