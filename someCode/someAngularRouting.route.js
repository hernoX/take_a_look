(function() {
  'use strict';

  angular
    .module('myModule')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/modules/main/views/templete.html',
        controller: 'SomeController',
        controllerAs: 'someAliasController',
        resolve: {
                'acl' : ['$q', 'AclService', function($q, AclService){
                    if(AclService.can('home')){
                        return true;
                    } else {
                        return $q.reject('Unauthorized');
                    }
                }]
            }
      })
      .state('login', {
            url: '/login',
            templateUrl: 'app/modules/login/views/anotherTemplate.html',
            controller: 'SomeOtherController',
            controllerAs: 'someOtherAliasController'
      })
    $urlRouterProvider.otherwise('/login');
  }

})();
