/* global angular */
'use strict';

angular
.module('myApp', ['smartTable.table'])
.controller('mainCtrl', ['$scope', '$http', function (scope, http) {

    http
    .get('http://localhost:8000')
    .then(function (res) {

        scope.rowCollection = res.data;
        scope.subHeaders = [{'foo':{'label':'subHeader1','subHeaderCellClass':'subHeader1','formatFunction':'uppercase'},'bar':{'label':'subHeader1','subHeaderCellClass':'subHeader2','formatFunction':'uppercase'}},{'foo':{'label':'subHeader1','subHeaderCellClass':'subHeader1','formatFunction':'uppercase'},'bar':{'label':'SUBHEADER','subHeaderCellClass':'subHeader2','formatFunction':'lowercase'}}];
        scope.columnCollection = Object.keys(scope.rowCollection[0]).map(function (key) {
            return {
                label: key,
                map: key
            };
        });

    }, function (err) {
        throw new Error (err);
    });

    
}]);