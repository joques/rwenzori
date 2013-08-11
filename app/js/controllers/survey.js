'use strict';

// survey controller

// need a smarter way of checking the language and deciding which value to use

function SurveyController ($scope, $translate, $location, ToroRes) {
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

	$scope.getPhonePlanOptions = function() {
		if ($translate.uses() === 'fr') {
			return ['Contrat mensuel', 'Payer à la consommation', 'Autres'];
		} else if ($translate.uses() === 'en') {
			return ['Subscription with monthly payment', 'Pay as you go', 'Others'];
		} else {
			return ['Subscription with monthly payment', 'Pay as you go', 'Others'];
		}
	};

	$scope.getPhoneChangeFrequencyOptions = function() {
		if ($translate.uses() === 'fr') {
			return ['jamais', 'une fois', 'deux fois', 'trois fois', 'quatre fois', 'cinq fois', 'six fois', 'sept fois', 'huit fois'];
		} else if ($translate.uses() === 'en') {
			return ['never', 'once', 'twice', 'thrice', 'four times', 'five times', 'six times', 'seven times', 'eight times'];
		} else {
			return ['never', 'once', 'twice', 'thrice', 'four times', 'five times', 'six times', 'seven times', 'eight times'];
		}
	};

	// $scope.phoneCountOptions = ['0-1', '2-4', '5-6', '7-8', '9-10', '10+'];

	$scope.getInsuranceOptions = function() {
		if ($translate.uses() === 'fr') {
			return ['Remplacer le téléphone en cas de perte', 'Remplacer le téléphone en cas de panne', 'Choisir les deux options'];
		} else if ($translate.uses() === 'en') {
			return ['Replace the phone when lost', 'Replace the phone when damaged', 'Choose both options'];
		} else {
			return ['Replace the phone when lost', 'Replace the phone when damaged', 'Choose both options'];
		}
	};

	$scope.resetValues = function() {
		if ($translate.uses() === 'fr') {
			$scope.surveyData = {
				everUsedAPhone: 'non',
				howLongUsedAPhone: 0,
				phoneCount: 0,
				phoneChange: 'non',
				acquirePlan: 'non',
				phoneValue: '0-20000',
				phonePlan: 'Payer à la consommation',
				insuranceWill: 'non',
				insurancePercentage: '1%',
				knowCarrier: 'non',				
				phoneChangeFrequency: 'jamais',
				phoneChangeCount: 0,
				brands: {
					nokiaBrand: false,
					samsungBrand: false,
					ericksonBrand: false,
					htcBrand: false,
					iphoneBrand: false,
					blackberryBrand: false,
					motorollaBrand: false,
					galaxyBrand: false
				},
				cellphoneValue: 0,
				cellPhonePlan: 'Payer à la consommation',
				willChangeCellPhone: 'non',
				canAfford: 'non',
				whichInsurance: 'Remplacer le téléphone en cas de perte',
				insureCurrent: 'non',
				percentageForCurrent: 0
			};
		} else if ($translate.uses() === 'en') {
			$scope.surveyData = {
				everUsedAPhone: 'no',
				howLongUsedAPhone: 0,
				phoneCount: 0,
				phoneChange: 'no',
				acquirePlan: 'no',
				phoneValue: '0-20000',
				phonePlan: 'Pay as you go',
				insuranceWill: 'no',
				insurancePercentage: '1%',
				knowCarrier: 'no',
				phoneChangeFrequency: 'never',
				phoneChangeCount: 0,
				brands: {
					nokiaBrand: false,
					samsungBrand: false,
					ericksonBrand: false,
					htcBrand: false,
					iphoneBrand: false,
					blackberryBrand: false,
					motorollaBrand: false,
					galaxyBrand: false
				},
				cellphoneValue: 0,
				cellPhonePlan: 'Pay as you go',
				willChangeCellPhone: 'no',
				canAfford: 'no',
				whichInsurance: 'Replace the phone when lost',
				insureCurrent: 'no',
				percentageForCurrent: 0
			};
		} else {
			$scope.surveyData = {
				everUsedAPhone: 'nada',
				howLongUsedAPhone: 0,
				phoneCount: 0,
				phoneChange: 'no',
				acquirePlan: 'no',
				phoneValue: '0-20000',
				phonePlan: 'Pay as you go',
				insuranceWill: 'no',
				insurancePercentage: '1%',
				knowCarrier: 'no',				
				phoneChangeFrequency: 'never',
				phoneChangeCount: 0,
				brands: {
					nokiaBrand: false,
					samsungBrand: false,
					ericksonBrand: false,
					htcBrand: false,
					iphoneBrand: false,
					blackberryBrand: false,
					motorollaBrand: false,
					galaxyBrand: false
				},
				cellphoneValue: 0,
				cellPhonePlan: 'Pay as you go',
				willChangeCellPhone: 'no',
				canAfford: 'no',
				whichInsurance: 'Replace the phone when lost',
				insureCurrent: 'no',
				percentageForCurrent: 0
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

	$scope.getYearsLabel = function() {
		if (($scope.surveyData.howLongUsedAPhone === 0) || ($scope.surveyData.howLongUsedAPhone === 1)) {
			return $translate('YEARLABEL');
		} else {
			return $translate('YEARSLABEL');
		}
		// if (($scope.surveyData.howLongUsedAPhone === 0) || ($scope.surveyData.howLongUsedAPhone === 1)) {
		// 	return $translate('YEARLABEL', {YEARCOUNT: 'sing'}, 'messageformat');
		// } else {
		// 	return $translate('YEARLABEL', {YEARCOUNT: 'other'}, 'messageformat');
		// }
	};	

	$scope.hasChangedPhone = function() {
		if ($translate.uses() === 'fr') {
			return (($scope.surveyData.phoneChange !== undefined) && ($scope.surveyData.phoneChange === "oui"));
		} else if ($translate.uses() === 'en') {
			return (($scope.surveyData.phoneChange !== undefined) && ($scope.surveyData.phoneChange === "yes"));
		} else {
			return (($scope.surveyData.phoneChange !== undefined) && ($scope.surveyData.phoneChange === "yes"));
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

	$scope.willInsureCurrent = function() {
		if ($translate.uses() === 'fr') {
			return (($scope.surveyData.insureCurrent !== undefined) && ($scope.surveyData.insureCurrent === "oui"));
		} else if ($translate.uses() === 'en') {
			return (($scope.surveyData.insureCurrent !== undefined) && ($scope.surveyData.insureCurrent === "yes"));
		} else {
			return (($scope.surveyData.insureCurrent !== undefined) && ($scope.surveyData.insureCurrent === "yes"));
		}
	};


	$scope.checkCanAfford = function() {
		if ($translate.uses() === 'fr') {
			return (($scope.surveyData.canAfford !== undefined) && ($scope.surveyData.canAfford === "oui"));
		} else if ($translate.uses() === 'en') {
			return (($scope.surveyData.canAfford !== undefined) && ($scope.surveyData.canAfford === "yes"));
		} else {
			return (($scope.surveyData.canAfford !== undefined) && ($scope.surveyData.canAfford === "yes"));
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

	$scope.canSubmitPotential = function() {
		if ($translate.uses() === 'fr') {
			return (($scope.surveyData.acquirePlan !== undefined) && ($scope.surveyData.acquirePlan === "oui") && ($scope.surveyData.favoriteBrand !== undefined) && ($scope.surveyData.favoriteBrand.length > 0));
		} else if ($translate.uses() === 'en') {
			return (($scope.surveyData.acquirePlan !== undefined) && ($scope.surveyData.acquirePlan === "yes") && ($scope.surveyData.favoriteBrand !== undefined) && ($scope.surveyData.favoriteBrand.length > 0));
		} else {
			return (($scope.surveyData.acquirePlan !== undefined) && ($scope.surveyData.acquirePlan === "yes") && ($scope.surveyData.favoriteBrand !== undefined) && ($scope.surveyData.favoriteBrand.length > 0));
		}
	};

	$scope.canSubmitConfirmed = function() {
		var selectedBrand = $scope.hasSetBrand();
		if ($translate.uses() === 'fr') {
			return selectedBrand;
		} else if ($translate.uses() === 'en') {
			return selectedBrand;
		} else {
			return selectedBrand;
		}
	};

	$scope.hasSetBrand = function() {
		var popularBrandSelected = (($scope.surveyData.brands.nokiaBrand) || ($scope.surveyData.brands.samsungBrand) || ($scope.surveyData.brands.ericksonBrand) || 
			($scope.surveyData.brands.htcBrand) || ($scope.surveyData.brands.iphoneBrand) || ($scope.surveyData.brands.blackberryBrand) || 
			($scope.surveyData.brands.motorollaBrand) || ($scope.surveyData.brands.galaxyBrand));
		if (popularBrandSelected) {
			return popularBrandSelected;
		} else {
			return (($scope.surveyData.otherPhoneBrand !== undefined) && ($scope.surveyData.otherPhoneBrand !== null))
		}
	}

	$scope.submitSurveyConfirmed = function() {
		// filter survey data and send it to database
	};

	$scope.submitSurveyPotential = function(){

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