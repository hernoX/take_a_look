/**
 * @ngdoc controller
 * @name myModule.controller:MyloginController
 * @requires $location, AuthenticationService, FlashService, regexService
 * @requires myModule.AuthenticationService
 * @requires myModule.FlashService
 * @description
 * Handle login logic
 */

(function () {
    'use strict';
    angular
        .module('myModule')
        .controller('MyloginController', MyloginController);

    MyloginController.$inject = ['$location', 'AuthenticationService', 'FlashService', 'regexService'];
    function MyloginController($location, AuthenticationService, FlashService, regexService) {
        var vm = this;
        vm.login = login;

        // Set regular expression to be used
        vm.regex = {
          password: regexService.getRegex('password')
        };

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        /**
         * @ngdoc method
         * @name login
         * @methodOf myModule.controller:MyloginController
         * @description
         * Tries to log in a user in the application.
         */
        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.email, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.email, vm.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        }
    }
})();
