(function(){
'use strict';

  /**
   * Main Angular app module
   */
  angular.module('votesApp', [
    'ui.router',
    'btford.socket-io',
    'ngCookies',
    'votesApp.admin',
    'votesApp.services',
  ]);
/*
[
  'ui.bootstrap'
]
*/
})();
