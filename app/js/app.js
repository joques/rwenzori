'use strict';

var engTrans = {
	'LANGUAGES': 'Languages',
	'LOGIN': 'Log In',
	'GREETINGS': 'Welcome to',
	'SURVEYBTN': 'Take Survey',
	'MOBILEPHONETITLE': 'Improving mobile phone usage...',
	'MOBILEPHONESUBTITLE': 'Share your cellphone usage with us and we will help you keep it longer',
	'BRANDTITLE': 'Brand and Cost',
	'BRANDCONTENT': 'We would like to know what are the most popular brands',
	'PHONEUSAGETITLE': 'Phone Usage',
	'PHONEUSAGECONTENT':'Depending on how long people have used a phone',
	'INSURANCEHABITTITLE': 'Insurance Habit',
	'INSURANCEHABITCONTENT': 'Would you insure your mobile devices',
	'FAVORITEBRANDPH': 'Favorite brand',
	'CARRIERSTATEPH':'Tell us about the carriers and their plans',
	'CARRIERNAMEPH': 'Carrier Name',
	'REASONPH': 'Reasons please...',
	'OTHERBRANDPH': 'Other brand',
	'OTHERPERCENTAGEPH': 'Other percentage',
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
	'QUESTION192': 'Do you intend to insure your phone?',
	'QUESTION193': 'Which insurance do you intend to subscribe to?',
	'QUESTION194': 'Could you state the reason why you do not want an insurance?',
	'QUESTION195': 'Would you like to insure your current phone?',
	'QUESTION196': 'What percentage would you like to insure?',
	'QUESTION197': 'Please state other percentage',
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
	'CANCELBTN': 'Cancel',
	"YEARLABEL": "{YEARCOUNT, select, sing{Year} other{Years}}",
	"SURVEYLABEL": "survey {SURVEYCOUNT, select, sing{response} other{responses}} already!"
};
var frTrans = {
	'LANGUAGES': 'Langages',
	'LOGIN': 'Se Connecter',
	'GREETINGS': 'Bienvenue à',
	'SURVEYBTN': 'Répondre au questionnaire',
	'MOBILEPHONETITLE': 'Améliorer l\'usage des téléphones mobiles',
	'MOBILEPHONESUBTITLE': 'Partagez votre expérience avec les téléphones mobiles et nous vous aiderons à les garder plus longtemps',
	'BRANDTITLE': 'Marque et Coût',
	'BRANDCONTENT': 'Parlez-nous de vos marques préférées',
	'PHONEUSAGETITLE': 'Utilisation',
	'PHONEUSAGECONTENT':'Depuis quand utilisez-vous un téléphone',
	'INSURANCEHABITTITLE': 'Assurance',
	'INSURANCEHABITCONTENT': 'Prendrez-vous la peine d\'assurer votre téléphone',
	'FAVORITEBRANDPH': 'Marque préférée',
	'CARRIERSTATEPH':'Fournissez nous plus de détails',
	'CARRIERNAMEPH': 'Opérateur',
	'REASONPH': 'Les raisons svp ...',
	'OTHERBRANDPH': 'Autre marque',
	'OTHERPERCENTAGEPH': 'Autre pourcentage',
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
	'QUESTION19': 'Quel forfait utilisez-vous en ce moment ?',
	'QUESTION191': 'Avez-vous l\'intention de changer de téléphone dans les deux prochaines années ?',
	'QUESTION192': 'Comptez-vous assurer votre téléphone en cas de perte ou de panne ?',
	'QUESTION193': 'Quel type de police d\'assurance comptez-vous adopter ?',
	'QUESTION194': 'Pourriez-voud indiquer pourquoi vous ne souhaiter pas d\'assurance ?',
	'QUESTION195': 'Souhaitez-vous assurer votre téléphone actuel ?',
	'QUESTION196': 'Quel pourcentage comptez-vous assurer ?',
	'QUESTION197': 'Préférez-vous un autre pourcentage?',
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
	'CANCELBTN': 'Annuler',
	"YEARLABEL": "{YEARCOUNT, select, sing{An} other{Ans}}",
	"SURVEYLABEL": "{SURVEYCOUNT, select, sing{réponse} other{réponses}} déja !"
};


// create the application
var rwenzApp = angular.module('rwenzori', ['ngCookies', 'ngResource', 'pascalprecht.translate', 'ui.bootstrap']);

// add backend resource via a factory
rwenzApp.factory('ToroRes', function($resource) {
	return $resource('/api/surveys');
});

// configure the application
rwenzApp.config(['$routeProvider', '$locationProvider', '$translateProvider', function($routeProvider, $locationProvider, $translateProvider){
	$routeProvider.
	when('/', {templateUrl: 'partials/main.html', controller: MainController}).
	when('/survey', {templateUrl: 'partials/survey.html', controller: SurveyController}).
	// when('/signup', {templateUrl: 'partials/signup.html', controller: SignUpController}).
	// when('/login', {templateUrl: 'partials/login.html', controller: LoginController}).
	// when('/logout', {template: " ", controller: LogoutController}).
	otherwise({redirectTo: '/'});
	$locationProvider.html5Mode(true);
	$translateProvider.translations('en', engTrans);
	$translateProvider.translations('fr', frTrans);
	$translateProvider.addInterpolation('$translateMessageFormatInterpolation');
	$translateProvider.preferredLanguage('en');
	$translateProvider.fallbackLanguage("en");
}]);

// defining the integer directive
var INTEGER_REGEXP =/^\-?\d*$/;

rwenzApp.directive('integer', function() {
	return {
		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl) {
			ctrl.$parsers.unshift(function(viewValue){
				if (INTEGER_REGEXP.test(viewValue)) {
					// the value is a valid integer
					ctrl.$setValidity('integer', true);
					return viewValue;
				} else {
					// according to the regexp the value is not a valid integer
					ctrl.$setValidity('integer', false);
					return undefined;
				}
			});
		}
	};
});