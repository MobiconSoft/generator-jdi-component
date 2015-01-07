(function() { 
  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .directive('<%= cameledName %>', <%= cameledName %>);

  /* @ngInject */
  function <%= cameledName %>() {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: link
    };    
  }

  function link(scope, element, attrs) {
    element.text('this is the <%= cameledName %> directive');
  }
})();