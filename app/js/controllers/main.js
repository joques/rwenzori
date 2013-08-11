'use strict';

// index controller

function MainController($scope, $translate, $cookieStore) {
	$scope.resetValues = function() {
		$scope.general = {
			username: $cookieStore.get('username'),
			fullName: $cookieStore.get('fullName'),
			isDeveloper: $cookieStore.get('isDeveloper'),
			loginOrSignupFailureMessage: $cookieStore.get('loginOrSignupFailureMessage')
		};
	};

	$scope.resetValues();

	$scope.getUsername = function() {
		return $cookieStore.get('username') ;
	};

	$scope.loggedIn = function() {
		return ($cookieStore.get('username') !== undefined);
	};

	$scope.canDevelop = function() {
		return (($scope.general.isDeveloper !== undefined) && ($scope.general.isDeveloper));
	};

	$scope.hasLoginFailed = function() {
		return ((typeof $scope.general.loginOrSignupFailureMessage !== "undefined") && ($scope.general.loginOrSignupFailureMessage !== null));	
	};

	$scope.toggleLanguageEnglish = function() {
		$translate.uses('en');
	};

	$scope.toggleLanguageToFrench = function() {
		$translate.uses('fr');
	};

	$scope.showingFrench = function() {
		return $translate.uses() === 'fr';
	};

	$scope.showingEnglish = function() {
		return $translate.uses() === 'en';
	};

	$scope.getSurveySummary = function() {
		return $translate('SURVEYLABEL', {SURVEYCOUNT: 'other'}, 'messageformat');
		// if ((SURVEYCOUNT === 0) || (SURVEYCOUNT === 1)){
		// 	return $translate('SURVEYLABEL');
		// } else {
		// 	return $translate('SURVEYSLABEL');
		// }
	};
}