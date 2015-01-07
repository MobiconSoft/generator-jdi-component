(function() { 
  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .service('<%= cameledName %>', <%= cameledName %>);

  /* @ngInject */
  function <%= cameledName %>() {
    this.api01 = method;

    function method() {

    }
  }
})();

