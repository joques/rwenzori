'use strict';


// create the application
var rwenzApp = angular.module('braam', ['ngCookies', 'ngResource', 'pascalprecht.translate', 'ui.bootstrap']);

// add backend resource via a factory
// rwenzApp.factory('BraamRes', function($resource) {
// 	return $resource('/api/projects/:project_id', {project_id: '@project_id'}, {update: {method: 'PUT'}});
// });

// configure the application
rwenzApp.config(['$routeProvider', '$locationProvider', '$translateProvider', function($routeProvider, $locationProvider, $translateProvider){
	$routeProvider.
	when('/', {templateUrl: 'partials/main.html', controller: MainController}).
	when('/survey', {templateUrl: 'partials/survey.html', controller: SurveyController}).
	// when('/signup', {templateUrl: 'partials/signup.html', controller: SignUpController}).
	// when('/login', {templateUrl: 'partials/login.html', controller: LoginController}).
	// when('/logout', {template: " ", controller: LogoutController}).
	// when('/new', {templateUrl: "partials/createProject.html", controller: CreateProjectController}).
	// when('/list', {templateUrl: "partials/listProject.html", controller: ListProjectController}).
	// when('/edit/:projectid', {templateUrl: "partials/editProject.html", controller: EditOrDeleteProjectController}).
	otherwise({redirectTo: '/'});
	$locationProvider.html5Mode(true);
	$translateProvider.translations('en', {
		'GREETINGS': 'Welcome to',
		'SURVEYBTN': 'Take Survey',
		'MOBILEPHONETITLE': 'Improving mobile phone usage...',
		'MOBILEPHONESUBTITLE': 'Share your cellphone usage with us and we will help you keep it longer'
	});
	$translateProvider.translations('fr', {
		'GREETINGS': 'Bienvenue à',
		'SURVEYBTN': 'Répondre au questionnaire',
		'MOBILEPHONETITLE': 'Améliorer l\'usage des téléphones mobiles',
		'MOBILEPHONESUBTITLE': 'Share your cellphone usage with us and we will help you keep it longer'
	});
	$translateProvider.preferredLanguage('en');
}]);