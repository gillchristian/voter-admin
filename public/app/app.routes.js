(function(){
	'use strict';

	angular.module('votesApp')
		.config(function($stateProvider, $urlRouterProvider) {

			// --- For any unmatched url, redirect to / ---
			$urlRouterProvider.otherwise("/");

			// --- Home ---
			$stateProvider
			// --- Votes ---
				.state('admin', {
					url: "/",
					templateUrl: "public/app/admin/admin.template.html",
					controller: 'AdminController',
					controllerAs: 'vm'
				})
		});
})();
