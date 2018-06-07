/// <reference path="../_all.ts" />

module D2WMobileCommandCenterApp{
    export class AddWorkDialogController {
        static $inject = ['workService', '$mdDialog'];

        constructor(private workService,
            private $mdDialog) 
        
        {
            var self = this;
            this.workService
                .loadAllApplicationMasters()
                .then(
                    (applicationMasters: ApplicationMaster[]) => {
                        self.applicationMasters = applicationMasters;
                    }
                );
            this.workService
                .loadAllWorkTypes()
                .then(
                    (workTypes: WorkType[]) => {
                        self.workTypes = workTypes;
                    }
                );
            this.workService
                .loadAllUsers()
                .then(
                    (users: User[]) => {
                        self.users = users;
                    }
                );
        }

        work: Work;
        applicationMasters: ApplicationMaster[] = [];
        workTypes: WorkType[] = [];
        users: User[] = [];

        cancel(): void {
            this.$mdDialog.cancel();
        }

        save(): void {
            this.$mdDialog.hide(this.work);
        }
    }
}