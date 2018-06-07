/// <reference path="../_all.ts" />
var D2WMobileCommandCenterApp;
(function (D2WMobileCommandCenterApp) {
    var MainController = /** @class */ (function () {
        function MainController(userService, workService, $mdDialog, $mdMedia, $mdToast, $window) {
            this.userService = userService;
            this.workService = workService;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.$mdToast = $mdToast;
            this.$window = $window;
            this.displayUsers = [];
            this.safeUsers = [];
            this.usersLoading = true;
            this.displayWork = [];
            this.safeWork = [];
            this.workLoading = true;
            var self = this;
            this.userService
                .loadAllUsers()
                .then(function (users) {
                self.displayUsers = users;
                self.safeUsers = users;
                self.usersLoading = false;
            });
            this.workService
                .loadAllWork()
                .then(function (work) {
                self.displayWork = work;
                self.safeWork = work;
                self.workLoading = false;
            });
        }
        MainController.prototype.addWork = function ($event) {
            var _this = this;
            var self = this;
            var useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));
            this.$mdDialog.show({
                templateUrl: './dist/view/newWorkDialog.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: D2WMobileCommandCenterApp.AddWorkDialogController,
                controllerAs: 'workController',
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            }).then(function (newWork) {
                if (newWork.idCurrentUser == null) {
                    newWork.idCurrentUser = 0;
                    newWork.cdCurrentStatus = "U";
                }
                else {
                    newWork.cdCurrentStatus = "A";
                }
                //Need to execute restful post
                _this.workService
                    .postWork(newWork)
                    .then(function (resp) {
                    if (resp.status == 200) {
                        self.openToast("Work Added");
                        self.displayWork.push(resp.data);
                        self.safeWork.push(resp.data);
                    }
                    else {
                        if (resp.status == 300) {
                            self.openToast(resp.data.Message);
                        }
                        else {
                            self.openToast('Update Failed');
                            console.log(resp.data.Message);
                        }
                    }
                });
            }, function () {
                console.log('You cancelled the dialog.');
            });
        };
        MainController.prototype.openMap = function ($event) {
            this.$window.open('./map.html');
        };
        MainController.prototype.getGPS = function () {
            var _this = this;
            var self = this;
            /*this.userService
                .loadAllUsers()
                .then(
                    (users: User[]) => {
                        self.displayUsers = users;
                        self.safeUsers = users;
                        self.usersLoading = false;
                    }
                )*/ ;
            this.workService
                .getGPS()
                .then(function (response) {
                _this.gpsData = response;
            });
        };
        MainController.prototype.onDrop = function ($event, work, user) {
            var self = this;
            work.cdCurrentStatus = "A";
            work.tsCurrentStatus = new Date().toLocaleDateString();
            work.idCurrentUser = user.id;
            this.workService
                .putWork(work)
                .then(function (resp) {
                if (resp.status == 200) {
                    self.openToast("Work Updated");
                    for (var _i = 0, _a = self.displayWork; _i < _a.length; _i++) {
                        var work_1 = _a[_i];
                        if (work_1.idWork == resp.data.idWork) {
                            work_1.idCurrentUser = resp.data.idCurrentUser;
                            work_1.txCurrentUser = resp.data.txCurrentUser;
                            work_1.cdCurrentStatus = resp.data.cdCurrentStatus;
                            work_1.txCurrentStatus = resp.data.txCurrentStatus;
                            work_1.tsCurrentStatus = resp.data.tsCurrentStatus;
                        }
                    }
                    self.safeWork = self.displayWork;
                    self.displayWork.push(resp.data);
                    self.safeWork.push(resp.data);
                }
                else {
                    self.openToast('Update Failed');
                    console.log(resp.data.Message);
                }
            });
        };
        MainController.prototype.dropSuccessHandler = function ($event, $index, work) {
        };
        //write message to screen
        MainController.prototype.openToast = function (message) {
            this.$mdToast.show(this.$mdToast.simple()
                .textContent(message)
                .position('top right')
                .hideDelay(3000));
        };
        MainController.$inject = [
            'userService',
            'workService',
            '$mdDialog',
            '$mdMedia',
            '$mdToast',
            '$window'
        ];
        return MainController;
    }());
    D2WMobileCommandCenterApp.MainController = MainController;
})(D2WMobileCommandCenterApp || (D2WMobileCommandCenterApp = {}));
//# sourceMappingURL=mainController.js.map