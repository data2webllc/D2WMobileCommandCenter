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
        
        constructor(private $http: ng.IHttpService) {    

        }
      
        selectedWork: Work = null;
      
        loadAllWork() : ng.IPromise<Work[]> {
            var results: ng.IPromise< any > = this.$http.get( 'http://localhost:53077/api/WorkMasterCurrentWorkList')
            .then( 
                ( response: any ) : ng.IPromise< any > => response.data 
                );
            return results;
        }

        loadAllWorkTypes() : ng.IPromise<WorkType[]> {
            var results: ng.IPromise< any > = this.$http.get( 'http://localhost:53077/api/WorkType', { cache: true })
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
            var results: ng.IPromise< any > = this.$http.get( 'http://localhost:53077/api/PeopleFieldUser', { cache: true })
            .then( 
                ( response: any ) : ng.IPromise< any > => response.data 
              );
            return results;
        }

        postWork(work : Work ) : ng.IPromise< any > {
            var results: ng.IPromise< any > = this.$http.post( 'http://localhost:53077/api/WorkMaster', work)
            .then( 
                ( response: any ) : ng.IPromise< any > => response
            )
            .catch(
                ( response: any ) : ng.IPromise< any > => response
            );
            return results;
        }

        putWork(work : Work ) : ng.IPromise< any > {
            var results: ng.IPromise< any > = this.$http.put( 'http://localhost:53077/api/WorkMaster', work)
            .then( 
                ( response: any ) : ng.IPromise< any > => response
            )
            .catch(
                ( response: any ) : ng.IPromise< any > => response
            );
            return results;
        }

        getGPS() : ng.IPromise< any > {
            var results: ng.IPromise< any > = this.$http.get('http://localhost:53077/api/WorkMasterCurrentWorkLocationList')
            .then(
                (response: any) : ng.IPromise< any > => response.data
            );
            return results;
        }
    }
  }