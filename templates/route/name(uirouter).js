(function() { 
  'use strict';

  angular
    .module('<%= scriptAppName %>')
    ..config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('<%= name %>', {
        url: '<%= route %>',
        templateUrl: '<%= htmlUrl %>',
        controller: '<%= classedName %>Ctrl'
      });  
  }
})();