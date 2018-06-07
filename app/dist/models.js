/// <reference path="_all.ts" />
var D2WMobileCommandCenterApp;
(function (D2WMobileCommandCenterApp) {
    var User = /** @class */ (function () {
        function User(id, idUser, txFullName, cdStatus, dtStatus, idUserStatus, flResetPassowrd, decLastLat, decLastLong, dtLastPing, idApplication, idWork, txCurrentStatus, txRoles, txUserStatus, idUserExpired) {
            this.id = id;
            this.idUser = idUser;
            this.txFullName = txFullName;
            this.cdStatus = cdStatus;
            this.dtStatus = dtStatus;
            this.idUserStatus = idUserStatus;
            this.flResetPassowrd = flResetPassowrd;
            this.decLastLat = decLastLat;
            this.decLastLong = decLastLong;
            this.dtLastPing = dtLastPing;
            this.idApplication = idApplication;
            this.idWork = idWork;
            this.txCurrentStatus = txCurrentStatus;
            this.txRoles = txRoles;
            this.txUserStatus = txUserStatus;
            this.idUserExpired = idUserExpired;
        }
        return User;
    }());
    D2WMobileCommandCenterApp.User = User;
    var Work = /** @class */ (function () {
        function Work(idWork, idWorkType, txWorkType, deleted, idApplication, txApplication, idApplicationWork, tsCreated, dtDue, cdCurrentStatus, txCurrentStatus, tsCurrentStatus, idCurrentUser, txCurrentUser, txWorkAddress1, txWorkAddress2, txCity, txState, txZipCode, txZipCodeExtra, txCrossStreet1, txCrossStreet2, txLatitude, txLongitude) {
            this.idWork = idWork;
            this.idWorkType = idWorkType;
            this.txWorkType = txWorkType;
            this.deleted = deleted;
            this.idApplication = idApplication;
            this.txApplication = txApplication;
            this.idApplicationWork = idApplicationWork;
            this.tsCreated = tsCreated;
            this.dtDue = dtDue;
            this.cdCurrentStatus = cdCurrentStatus;
            this.txCurrentStatus = txCurrentStatus;
            this.tsCurrentStatus = tsCurrentStatus;
            this.idCurrentUser = idCurrentUser;
            this.txCurrentUser = txCurrentUser;
            this.txWorkAddress1 = txWorkAddress1;
            this.txWorkAddress2 = txWorkAddress2;
            this.txCity = txCity;
            this.txState = txState;
            this.txZipCode = txZipCode;
            this.txZipCodeExtra = txZipCodeExtra;
            this.txCrossStreet1 = txCrossStreet1;
            this.txCrossStreet2 = txCrossStreet2;
            this.txLatitude = txLatitude;
            this.txLongitude = txLongitude;
        }
        return Work;
    }());
    D2WMobileCommandCenterApp.Work = Work;
    var WorkType = /** @class */ (function () {
        function WorkType(idWorkType, description) {
            this.idWorkType = idWorkType;
            this.description = description;
        }
        return WorkType;
    }());
    D2WMobileCommandCenterApp.WorkType = WorkType;
    var ApplicationMaster = /** @class */ (function () {
        function ApplicationMaster(idApplication, txApplication) {
            this.idApplication = idApplication;
            this.txApplication = txApplication;
        }
        return ApplicationMaster;
    }());
    D2WMobileCommandCenterApp.ApplicationMaster = ApplicationMaster;
})(D2WMobileCommandCenterApp || (D2WMobileCommandCenterApp = {}));
//# sourceMappingURL=models.js.map