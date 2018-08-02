/// <reference path="_all.ts" />

module D2WMobileCommandCenterApp {
 
    export class User {
      constructor(
        public id: number, 
        public idUser: string, 
        public txFullName: string, 
        public cdStatus: string,
        public dtStatus: string,
        public idUserStatus: number,
        public flResetPassowrd: Boolean,
        public decLastLat: number,
        public decLastLong: number,
        public dtLastPing: string,
        public idApplication: number,
        public idWork: number,
        public txCurrentStatus: string,
        public txRoles: string,
        public txUserStatus: string,
        public idUserExpired: number
        ) {}
    }
    
    export class Work {
      constructor(
        public updatedAt: string,
        public deleted: Boolean,
        public idWork: number,
        public idWorkType: number,
        public txWorkType: string, 
        public idApplication: string,
        public txApplication: string,
        public idApplicationWork: string,
        public tsCreated: string,
        public dtDue: string,
        public cdCurrentStatus: string,
        public txCurrentStatus: string,
        public tsCurrentStatus: string,
        public idCurrentUser: number,
        public txCurrentUser: string,
        public txWorkAddress1: string,
        public txWorkAddress2: string,
        public txCity: string,
        public txState: string,
        public txZipCode: string,
        public txZipCodeExtra: string,
        public txCrossStreet1: string,
        public txCrossStreet2: string,
        public txLatitude: string,
        public txLongitude: string
      ) {}
    }

    export class WorkType {
      constructor (
        public idWorkType: number,
        public description: string
      ) {}
    }

    export class ApplicationMaster {
      constructor (
        public idApplication: number,
        public txApplication: string
      ) {}
    }
  }
