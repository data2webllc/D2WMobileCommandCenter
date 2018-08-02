/// <reference path="../_all.ts" />
var D2WMobileCommandCenterApp;
(function (D2WMobileCommandCenterApp) {
    var WorkService = /** @class */ (function () {
        //private serverUrl = "http://d2wmobile.azurewebsites.net/";
        function WorkService($http) {
            this.$http = $http;
            this.serverUrl = "http://localhost:53077/";
            this.selectedWork = null;
        }
        WorkService.prototype.loadAllWork = function () {
            var results = this.$http.get(this.serverUrl + '/api/WorkMasterCurrentWorkList')
                .then(function (response) { return response.data; });
            return results;
        };
        WorkService.prototype.loadAllWorkTypes = function () {
            var results = this.$http.get(this.serverUrl + '/api/WorkType', { cache: true })
                .then(function (response) { return response.data; });
            return results;
        };
        WorkService.prototype.loadAllApplicationMasters = function () {
            var results = this.$http.get('http://localhost:53077/api/ApplicationMaster', { cache: true })
                .then(function (response) { return response.data; });
            return results;
        };
        WorkService.prototype.loadAllUsers = function () {
            var results = this.$http.get(this.serverUrl + '/api/PeopleFieldUser', { cache: true })
                .then(function (response) { return response.data; });
            return results;
        };
        WorkService.prototype.postWork = function (work) {
            var results = this.$http.post(this.serverUrl + '/api/WorkMaster', work)
                .then(function (response) { return response; })
                .catch(function (response) { return response; });
            return results;
        };
        WorkService.prototype.putWork = function (work) {
            var results = this.$http.put(this.serverUrl + '/api/WorkMaster', work)
                .then(function (response) { return response; })
                .catch(function (response) { return response; });
            return results;
        };
        WorkService.prototype.getGPS = function () {
            var results = this.$http.get(this.serverUrl + '/api/WorkMasterCurrentWorkLocationList')
                .then(function (response) { return response.data; });
            return results;
        };
        WorkService.$inject = ['$http'];
        return WorkService;
    }());
    D2WMobileCommandCenterApp.WorkService = WorkService;
})(D2WMobileCommandCenterApp || (D2WMobileCommandCenterApp = {}));
//# sourceMappingURL=workService.js.map