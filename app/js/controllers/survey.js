'use strict';

// survey controller

function SurveyController ($scope, $translate, $location) {
	$scope.getBoolOptions = function() {
		if ($translate.uses() === 'fr') {
			return ['oui', 'non'];
		} else if ($translate.uses() === 'en') {
			return ['no', 'yes'];
		} else {
			return ['nada', 'si'];
		}
	};

	$scope.getUsageTimeOptions = function() {
		if ($translate.uses() === 'fr') {
			return ['0-3 Ans', '3-5 Ans', '5-10 Ans', '10 Ans+'];
		} else if ($translate.uses() === 'en') {
			return ['0-3 Years', '3-5 Years', '5-10 Years', '10 Years+'];
		} else {
			return ['0-3 Years', '3-5 Years', '5-10 Years', '10 Years+'];
		}
	};

	$scope.phoneValueOptions = ['0-20000', '20000-50000', '50000-80000', '80000-120000', '120000-160000', '160000-200000', '200000-500000', '500000+'];

	$scope.getPhonePlanOptions = function() {
		if ($translate.uses() === 'fr') {
			return ['Contrat mensuel', 'Payer à la consommation', 'Autres'];
		} else if ($translate.uses() === 'en') {
			return ['Subscription with monthly payment', 'Pay as you go', 'Others'];
		} else {
			return ['Subscription with monthly payment', 'Pay as you go', 'Others'];
		}
	};

	$scope.insurancePercentageOptions = ['1%', '2%', '3%', '4%', '5%', '6%', '7%', '8%', '9%', '10%', '15%', '20%', '25+%'];

	$scope.resetValues = function() {
		if ($translate.uses() === 'fr') {
			$scope.surveyData = {
				everUsedAPhone: 'non',
				usageTime: '0-3 Ans',
				acquirePlan: 'non',
				phoneValue: '0-20000',
				phonePlan: 'Payer à la consommation',
				insuranceWill: 'non',
				insurancePercentage: '1%',
				knowCarrier: 'non'
			};
		} else if ($translate.uses() === 'en') {
			$scope.surveyData = {
				everUsedAPhone: 'no',
				usageTime: '0-3 Years',
				acquirePlan: 'no',
				phoneValue: '0-20000',
				phonePlan: 'Pay as you go',
				insuranceWill: 'no',
				insurancePercentage: '1%',
				knowCarrier: 'no'
			};
		} else {
			$scope.surveyData = {
				everUsedAPhone: 'nada',
				usageTime: '0-3 Years',
				acquirePlan: 'no',
				phoneValue: '0-20000',
				phonePlan: 'Pay as you go',
				insuranceWill: 'no',
				insurancePercentage: '1%',
				knowCarrier: 'no'
			};
		}
	};

	$scope.resetValues();
	$scope.isPhoneUser = function(){
		if ($translate.uses() === 'fr') {
			return (($scope.surveyData.everUsedAPhone !== undefined) && ($scope.surveyData.everUsedAPhone === "oui"));
		} else if ($translate.uses() === 'en') {
			return (($scope.surveyData.everUsedAPhone !== undefined) && ($scope.surveyData.everUsedAPhone === "yes"));
		} else {
			return (($scope.surveyData.everUsedAPhone !== undefined) && ($scope.surveyData.everUsedAPhone === "yes"));
		}
		
	};

	$scope.isPotentialPhoneUser = function(){
		if ($translate.uses() === 'fr') {
			return (($scope.surveyData.everUsedAPhone !== undefined) && ($scope.surveyData.everUsedAPhone === "non"));
		} else if ($translate.uses() === 'en') {
			return (($scope.surveyData.everUsedAPhone !== undefined) && ($scope.surveyData.everUsedAPhone === "no"));
		} else {
			return (($scope.surveyData.everUsedAPhone !== undefined) && ($scope.surveyData.everUsedAPhone === "no"));
		}
	};

	$scope.willAcquirePhone = function() {
		if ($translate.uses() === 'fr') {
			return (($scope.surveyData.acquirePlan !== undefined) && ($scope.surveyData.acquirePlan === "oui"));
		} else if ($translate.uses() === 'en') {
			return (($scope.surveyData.acquirePlan !== undefined) && ($scope.surveyData.acquirePlan === "yes"));
		} else {
			return (($scope.surveyData.acquirePlan !== undefined) && ($scope.surveyData.acquirePlan === "yes"));
		}
	};

	$scope.willInsure = function() {
		if ($translate.uses() === 'fr') {
			return (($scope.surveyData.insuranceWill !== undefined) && ($scope.surveyData.insuranceWill === "oui"));
		} else if ($translate.uses() === 'en') {
			return (($scope.surveyData.insuranceWill !== undefined) && ($scope.surveyData.insuranceWill === "yes"));
		} else {
			return (($scope.surveyData.insuranceWill !== undefined) && ($scope.surveyData.insuranceWill === "yes"));
		}
	};

	$scope.existsCarrierWithInsurancePlan = function() {
		if ($translate.uses() === 'fr') {
			return (($scope.surveyData.knowCarrier !== undefined) && ($scope.surveyData.knowCarrier === "oui"));
		} else if ($translate.uses() === 'en') {
			return (($scope.surveyData.knowCarrier !== undefined) && ($scope.surveyData.knowCarrier === "yes"));
		} else {
			return (($scope.surveyData.knowCarrier !== undefined) && ($scope.surveyData.knowCarrier === "yes"));
		}
	};

	$scope.canSubmit = function() {
		if ($translate.uses() === 'fr') {
			return (($scope.surveyData.acquirePlan !== undefined) && ($scope.surveyData.acquirePlan === "oui") && ($scope.surveyData.favoriteBrand !== undefined) && ($scope.surveyData.favoriteBrand.length > 0));
		} else if ($translate.uses() === 'en') {
			return (($scope.surveyData.acquirePlan !== undefined) && ($scope.surveyData.acquirePlan === "yes") && ($scope.surveyData.favoriteBrand !== undefined) && ($scope.surveyData.favoriteBrand.length > 0));
		} else {
			return (($scope.surveyData.acquirePlan !== undefined) && ($scope.surveyData.acquirePlan === "yes") && ($scope.surveyData.favoriteBrand !== undefined) && ($scope.surveyData.favoriteBrand.length > 0));
		}
		
	};

	$scope.submitSurvey = function() {
		// send the survey data to the database
		$location.path('/');
	};

	$scope.toggleLanguageEnglish = function() {
		$translate.uses('en');
		$scope.resetValues();
	};

	$scope.toggleLanguageToFrench = function() {
		$translate.uses('fr');
		$scope.resetValues();
	};

	$scope.showingFrench = function() {
		return $translate.uses() === 'fr';
	};

	$scope.showingEnglish = function() {
		return $translate.uses() === 'en';
	};
}