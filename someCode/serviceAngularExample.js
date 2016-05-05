/**
 * @ngdoc service
 * @name someModule.regexService
 * @description
 * Regular Expression service to provide useful regex to controllers
 */

(function() {
    'use strict';

    angular
        .module('someModule')
        .factory('regexService', regexService);

    /* @ngInject */
    function regexService() {
        // text: Unicode characters and '_'
        var regex = {
          text: /^\w+$/,
          password: /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
        };

        var service = {
            getRegex: getRegex
        };

        return service;

        function getRegex(regexKey) {
          return regex[regexKey];
        }

    }
})();
