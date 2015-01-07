(function() { 
  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .config(config);

  /* @ngInject */
  function config($provide) {
    $provide.decorator('<%= cameledName %>', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });       
  }
})();
