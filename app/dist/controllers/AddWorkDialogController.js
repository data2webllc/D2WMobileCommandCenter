/// <reference path="../_all.ts" />
var D2WMobileCommandCenterApp;
(function (D2WMobileCommandCenterApp) {
    var AddWorkDialogController = /** @class */ (function () {
        function AddWorkDialogController(workService, $mdDialog) {
            this.workService = workService;
            this.$mdDialog = $mdDialog;
            this.applicationMasters = [];
            this.workTypes = [];
            this.users = [];
            var self = this;
            this.workService
                .loadAllApplicationMasters()
                .then(function (applicationMasters) {
                self.applicationMasters = applicationMasters;
            });
            this.workService
                .loadAllWorkTypes()
                .then(function (workTypes) {
                self.workTypes = workTypes;
            });
            this.workService
                .loadAllUsers()
                .then(function (users) {
                self.users = users;
            });
        }
        AddWorkDialogController.prototype.cancel = function () {
            this.$mdDialog.cancel();
        };
        AddWorkDialogController.prototype.save = function () {
            this.$mdDialog.hide(this.work);
        };
        AddWorkDialogController.$inject = ['workService', '$mdDialog'];
        return AddWorkDialogController;
    }());
    D2WMobileCommandCenterApp.AddWorkDialogController = AddWorkDialogController;
})(D2WMobileCommandCenterApp || (D2WMobileCommandCenterApp = {}));
//# sourceMappingURL=addWorkDialogController.js.map