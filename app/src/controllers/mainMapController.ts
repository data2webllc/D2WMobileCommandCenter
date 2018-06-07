/// <reference path="../_all.ts" />

module D2WMobileCommandCenterMapApp{
    export class MainMapController {
        static $inject = [
            '$mdDialog',
            '$mdMedia',
            '$mdToast',
            '$window'];
         
        constructor
        (
            private $mdDialog: angular.material.IDialogService,
            private $mdMedia: angular.material.IMedia,
            private $mdToast: angular.material.IToastService,
            private $window: angular.IWindowService
        ) 

        {
            var self = this;

        }
        
        gpsData: string;


        getGPS() {
            var self = this;
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