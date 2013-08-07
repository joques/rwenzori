'use strict';

var engTrans = {
	'LANGUAGES': 'Languages',
	'LOGIN': 'Log In',
	'GREETINGS': 'Welcome to',
	'SURVEYBTN': 'Take Survey',
	'MOBILEPHONETITLE': 'Improving mobile phone usage...',
	'MOBILEPHONESUBTITLE': 'Share your cellphone usage with us and we will help you keep it longer',
	'FAVORITEBRANDPH': 'Favorite brand',
	'CARRIERSTATEPH':'Tell us about the carriers and their plans',
	'QUESTION0': 'Have you ever had a phone?',
	'ALREADYUSERLEGEND': 'Existing phone user',
	'QUESTION10': 'Have long have you had a phone?',
	'POTENTIALUSERLEGEND': 'Potential phone user',
	'QUESTION20': 'Are you planning to get a cellphone?',
	'QUESTION21': 'What is your favorite brand?',
	'QUESTION22': 'What value of cellphone would you like to have?',
	'QUESTION23': 'What cellphone plan would you prefer to have?',
	'QUESTION24': 'Would you like an insurance for your phone?',
	'QUESTION25': 'What percentage would you like to insure?',
	'QUESTION26': 'Do you know a carrier offering an insurance on phones?',
	'QUESTION27': 'Please state',
	'SUBMITBTN': 'Submit',
	'CANCELBTN': 'Cancel'
};
var frTrans = {
	'LANGUAGES': 'Langages',
	'LOGIN': 'Se Connecter',
	'GREETINGS': 'Bienvenue à',
	'SURVEYBTN': 'Répondre au questionnaire',
	'MOBILEPHONETITLE': 'Améliorer l\'usage des téléphones mobiles',
	'MOBILEPHONESUBTITLE': 'Share your cellphone usage with us and we will help you keep it longer',
	'FAVORITEBRANDPH': 'Marque préférée',
	'CARRIERSTATEPH':'Fournissez nous plus de détails',
	'QUESTION0': 'Avez-vous jamais possédé un téléphone portable ?',
	'ALREADYUSERLEGEND': 'Utilisateur de téléphone',
	'QUESTION10': 'Depuis quand utilisez-vous un téléphone ?',
	'POTENTIALUSERLEGEND': 'Utilisateur potentiel',
	'QUESTION20': 'Avez-vous l\'intention de vous procurer un téléphone ?',
	'QUESTION22': 'Quelle gamme de prix vous convient ?',
	'QUESTION21': 'Quelle est votre marque préférée ?',
	'QUESTION23': 'Quel forfait téléphonique comptez-vous choisir ?',
	'QUESTION24': 'Prendrez-vous une assurance en cas de panne ou perte ?',
	'QUESTION25': 'Quel pourcentage comptez-vous assurer ?',
	'QUESTION26': 'Connaissez-vous un opérateur offrant une assurance ?',
	'QUESTION27': 'Plus de détails SVP',
	'SUBMITBTN': 'Soumettre',
	'CANCELBTN': 'Annuler'
};


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
	$translateProvider.translations('en', engTrans);
	$translateProvider.translations('fr', frTrans);
	$translateProvider.preferredLanguage('en');
}]);