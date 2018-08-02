/// <reference path="../_all.ts" />

module D2WMobileCommandCenterApp {
  
    export interface IUserService {
      loadAllUsers(): ng.IPromise<User[]>;
      selectedUser: User;
    }
    
    export class UserService implements IUserService {
      static $inject = ['$http'];
      
      //private serverUrl = "http://localhost:53077/";
      private serverUrl = "http://d2wmobile.azurewebsites.net/";
      
      constructor(private $http: ng.IHttpService) {    

      }
      
      selectedUser: User = null;
      
      loadAllUsers() : ng.IPromise<User[]> {
          var results: ng.IPromise< any > = this.$http.get( this.serverUrl + '/api/PeopleFieldUser')
          .then( 
              ( response: any ) : ng.IPromise< any > => response.data 
            );
          return results;
      }
    }
  }