/// <reference path="../_all.ts" />

module D2WMobileCommandCenterApp{
    export class MainController {
        static $inject = [
            'userService',
            'workService',
            '$mdDialog',
            '$mdMedia',
            '$mdToast',
            '$window'];
         
        constructor
        (
            private userService: IUserService,
            private workService: IWorkService,
            private $mdDialog: angular.material.IDialogService,
            private $mdMedia: angular.material.IMedia,
            private $mdToast: angular.material.IToastService,
            private $window: angular.IWindowService
        ) 

        {
            var self = this;
            this.userService
                .loadAllUsers()
                .then(
                    (users: User[]) => {
                        self.displayUsers = users;
                        self.safeUsers = users;
                        self.usersLoading = false;
                    }
                );
            this.workService
                .loadAllWork()
                .then(
                    (work: Work[]) => {
                        self.displayWork = work;
                        self.safeWork = work;
                        self.workLoading = false;
                        self.workLastUpdated = '';
                        for (var index in work) {
                            var item = work[index];
                            if(self.workLastUpdated == '') {
                                self.workLastUpdated = item.updatedAt;
                            } else {
                                if(self.workLastUpdated < item.updatedAt) {
                                    self.workLastUpdated = item.updatedAt;
                                }
                            }
                        }
                    }
                );
        }
        
        displayUsers: User[] = [];
        safeUsers: User[] = [];
        usersLoading: boolean = true;
        displayWork: Work[] = [];
        safeWork: Work[] = [];
        workLoading: boolean = true;
        gpsData: string;
        workLastUpdated: string;

        addWork($event) {
            var self = this;
            var useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));

            this.$mdDialog.show({
                templateUrl: './dist/view/newWorkDialog.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: AddWorkDialogController,
                controllerAs: 'workController',
                clickOutsideToClose:true,
                fullscreen: useFullScreen
            }).then((newWork: Work) => {
                if(newWork.idCurrentUser == null) {
                    newWork.idCurrentUser = 0;
                    newWork.cdCurrentStatus = "U";
                } else {
                    newWork.cdCurrentStatus = "A";
                }


                //Need to execute restful post
                this.workService
                    .postWork(newWork)
                    .then(
                        (resp: any) => {
                            if(resp.status == 200) {
                                self.openToast("Work Added");
                                self.displayWork.push(resp.data);
                                self.safeWork.push(resp.data);
                            } else {if(resp.status == 300) {
                                    self.openToast(resp.data.Message);
                            } else {
                                self.openToast('Update Failed');
                                console.log(resp.data.Message);
                            }
                        }
                    }); 
            }, () => {
                console.log('You cancelled the dialog.');
            });
        }

        openMap($event) {
            this.$window.open('./map.html');
        }

        getGPS() {
            var self = this;
            /*this.userService
                .loadAllUsers()
                .then(
                    (users: User[]) => {
                        self.displayUsers = users;
                        self.safeUsers = users;
                        self.usersLoading = false;
                    }
                )*/;
            this.workService
                .getGPS()
                .then((response: any) => {
                    this.gpsData = response
                });            
        }

        onDrop($event, work: Work, user: User) {
            var self = this;
            work.cdCurrentStatus = "A";
            work.tsCurrentStatus = new Date().toLocaleDateString();
            work.idCurrentUser = user.id;
            this.workService
                .putWork(work)
                .then(
                    (resp: any) => {
                        if(resp.status == 200) {
                            self.openToast("Work Updated");
                            for (let work of self.displayWork) {
                                if(work.idWork == resp.data.idWork) {
                                    work.idCurrentUser = resp.data.idCurrentUser;
                                    work.txCurrentUser = resp.data.txCurrentUser;
                                    work.cdCurrentStatus = resp.data.cdCurrentStatus;
                                    work.txCurrentStatus = resp.data.txCurrentStatus;
                                    work.tsCurrentStatus = resp.data.tsCurrentStatus;
                                }
                            }
                            self.safeWork = self.displayWork;

                            self.displayWork.push(resp.data);
                            self.safeWork.push(resp.data);
                        } else {
                            self.openToast('Update Failed');
                            console.log(resp.data.Message);
                        }
                    }
                );

        }
        
        dropSuccessHandler($event, $index, work: Work) {
 
        }

        //write message to screen
        openToast(message: string): void {
            this.$mdToast.show(
              this.$mdToast.simple()
                .textContent(message)
                .position('top right')
                .hideDelay(3000)
            );
          }
    }
}