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
	'CARRIERNAMEPH': 'Carrier Name',
	'OTHERBRANDPH': 'Other brand',
	'ALREADYUSERLEGEND': 'Existing phone user',
	'QUESTION0': 'Have you ever had a phone?',
	'QUESTION10': 'Have long have you had a phone?',
	'QUESTION11': 'How many cellphones do currently have?',
	'QUESTION12': 'Who is your current carrier?',
	'QUESTION13': 'Have you changed your phone since?',
	'QUESTION14': 'How often have you changed your cellphone in the last five years?',
	'QUESTION15': 'How many cellphones have you used in the last five years?',
	'QUESTION16': 'What brand have you used in the last five years?',
	'QUESTION17': 'Other brands?',
	'QUESTION18': 'What is the value of your current cellphone?',
	'QUESTION19': 'What is your current plan?',
	'QUESTION191': 'Do you have plans to change your cellphone in the coming two years?',
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
	'CARRIERNAMEPH': 'Opérateur',
	'OTHERBRANDPH': 'Autre marque',
	'QUESTION0': 'Avez-vous jamais possédé un téléphone portable ?',
	'QUESTION10': 'Depuis quand utilisez-vous un téléphone ?',
	'QUESTION11': 'Combien de téléphones possédez-vous en ce moment ?',
	'QUESTION12': 'A quel opérateur etes-vous abonné(e) en ce moment ?',
	'QUESTION13': 'Avez-vous changé de téléphone depuis?',
	'QUESTION14': 'A quelle fréquence avez-vous changé de téléphone les cinq dernières années ?',
	'QUESTION15': 'Combine de téléphones avez-vous utilisé les cinq dernières années ?',
	'QUESTION16': 'Quelle marque de téléphone avez-vous utilisé les cinq dernières années ?',
	'QUESTION17': 'Autres marques ?',
	'QUESTION18': 'Quelle est la valeur de votre téléphone ?',
	'QUESTION19': 'Quel type de forfait utilisez-vous en ce moment ?',
	'QUESTION191': 'Avez-vous l\'intention de changer de téléphone dans les deux prochaines années ?',
	'ALREADYUSERLEGEND': 'Utilisateur de téléphone',
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