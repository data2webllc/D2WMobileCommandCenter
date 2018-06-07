/// <reference path="../_all.ts" />
var D2WMobileCommandCenterApp;
(function (D2WMobileCommandCenterApp) {
    var WorkService = /** @class */ (function () {
        function WorkService($http) {
            this.$http = $http;
            this.selectedWork = null;
        }
        WorkService.prototype.loadAllWork = function () {
            var results = this.$http.get('http://localhost:53077/api/WorkMasterCurrentWorkList')
                .then(function (response) { return response.data; });
            return results;
        };
        WorkService.prototype.loadAllWorkTypes = function () {
            var results = this.$http.get('http://localhost:53077/api/WorkType', { cache: true })
                .then(function (response) { return response.data; });
            return results;
        };
        WorkService.prototype.loadAllApplicationMasters = function () {
            var results = this.$http.get('http://localhost:53077/api/ApplicationMaster', { cache: true })
                .then(function (response) { return response.data; });
            return results;
        };
        WorkService.prototype.loadAllUsers = function () {
            var results = this.$http.get('http://localhost:53077/api/PeopleFieldUser', { cache: true })
                .then(function (response) { return response.data; });
            return results;
        };
        WorkService.prototype.postWork = function (work) {
            var results = this.$http.post('http://localhost:53077/api/WorkMaster', work)
                .then(function (response) { return response; })
                .catch(function (response) { return response; });
            return results;
        };
        WorkService.prototype.putWork = function (work) {
            var results = this.$http.put('http://localhost:53077/api/WorkMaster', work)
                .then(function (response) { return response; })
                .catch(function (response) { return response; });
            return results;
        };
        WorkService.prototype.getGPS = function () {
            var results = this.$http.get('http://localhost:53077/api/WorkMasterCurrentWorkLocationList')
                .then(function (response) { return response.data; });
            return results;
        };
        WorkService.$inject = ['$http'];
        return WorkService;
    }());
    D2WMobileCommandCenterApp.WorkService = WorkService;
})(D2WMobileCommandCenterApp || (D2WMobileCommandCenterApp = {}));
//# sourceMappingURL=workService.js.map