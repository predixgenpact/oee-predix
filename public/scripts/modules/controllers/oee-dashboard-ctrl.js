define(['angular', 'app-module', 'google-maps'], function (angular) {
    'use strict';

    // Controller definition
    angular.module('app.module')
        .controller('OeeDashboardCtrl', OeeDashboardCtrl);
    OeeDashboardCtrl.$inject = ['$scope', '$timeout', '$window'];

    function OeeDashboardCtrl ($scope, $timeout, $window){

       
            angular.element('.collapsible').collapsible();
      
    }
});