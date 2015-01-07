(function() { 
  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .filter('<%= cameledName %>', <%= cameledName %>);

  /* @ngInject */
  function <%= cameledName %>() {
    return function (input) {
      return '<%= cameledName %> filter: ' + input;
    };
  }
})();


