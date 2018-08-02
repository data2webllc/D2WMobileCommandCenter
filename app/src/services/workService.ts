/// <reference path="../_all.ts" />

module D2WMobileCommandCenterApp {
  
    export interface IWorkService {
      loadAllWork(): ng.IPromise<Work[]>;
      loadAllWorkTypes(): ng.IPromise<WorkType[]>;
      loadAllApplicationMasters(): ng.IPromise<ApplicationMaster[]>;
      loadAllUsers(): ng.IPromise<User[]>;
      postWork(newWork : Work): ng.IPromise< any >;
      putWork(work: Work): ng.IPromise< any >;
      getGPS(): ng.IPromise< any >;
      selectedWork: Work;
    }
    
    export class WorkService implements IWorkService {
        static $inject = ['$http'];
        
        //private serverUrl = "http://localhost:53077/";
        private serverUrl = "http://d2wmobile.azurewebsites.net/";
        
        constructor(private $http: ng.IHttpService) {    

        }
      
        selectedWork: Work = null;
      
        loadAllWork() : ng.IPromise<Work[]> {
            var results: ng.IPromise< any > = this.$http.get( this.serverUrl + '/api/WorkMasterCurrentWorkList')
            .then( 
                ( response: any ) : ng.IPromise< any > => response.data 
                );
            return results;
        }

        loadAllWorkTypes() : ng.IPromise<WorkType[]> {
            var results: ng.IPromise< any > = this.$http.get( this.serverUrl + '/api/WorkType', { cache: true })
            .then( 
                ( response: any ) : ng.IPromise< any > => response.data 
            );
            return results;
        }
        
        loadAllApplicationMasters() : ng.IPromise<ApplicationMaster[]> {
            var results: ng.IPromise< any > = this.$http.get( 'http://localhost:53077/api/ApplicationMaster', { cache: true })
            .then( 
                ( response: any ) : ng.IPromise< any > => response.data 
            );
            return results;
        }
       
        loadAllUsers() : ng.IPromise<User[]> {
            var results: ng.IPromise< any > = this.$http.get( this.serverUrl + '/api/PeopleFieldUser', { cache: true })
            .then( 
                ( response: any ) : ng.IPromise< any > => response.data 
              );
            return results;
        }

        postWork(work : Work ) : ng.IPromise< any > {
            var results: ng.IPromise< any > = this.$http.post( this.serverUrl + '/api/WorkMaster', work)
            .then( 
                ( response: any ) : ng.IPromise< any > => response
            )
            .catch(
                ( response: any ) : ng.IPromise< any > => response
            );
            return results;
        }

        putWork(work : Work ) : ng.IPromise< any > {
            var results: ng.IPromise< any > = this.$http.put( this.serverUrl + '/api/WorkMaster', work)
            .then( 
                ( response: any ) : ng.IPromise< any > => response
            )
            .catch(
                ( response: any ) : ng.IPromise< any > => response
            );
            return results;
        }

        getGPS() : ng.IPromise< any > {
            var results: ng.IPromise< any > = this.$http.get( this.serverUrl + '/api/WorkMasterCurrentWorkLocationList')
            .then(
                (response: any) : ng.IPromise< any > => response.data
            );
            return results;
        }
    }
  }