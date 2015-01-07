(function() { 
  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .factory('<%= cameledName %>', <%= cameledName %>);

  /* @ngInject */
  function <%= cameledName %>() {
    var api = {
      api01: method
    };
    return api;

    function method() {

    }
  }
})();
