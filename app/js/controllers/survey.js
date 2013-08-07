'use strict';

// survey controller

function SurveyController ($scope, $location) {
	$scope.BoolOptions = ['yes', 'no'];
	$scope.usageTimeOptions = ['0-3 Years', '3-5 Years', '5-10 Years', '10 Years+'];
	$scope.phoneValueOptions = ['0-20000', '20000-50000', '50000-80000', '80000-120000', '120000-160000', '160000-200000', '200000-500000', '500000+'];
	$scope.phonePlanOptions = ['Subscription with monthly payment', 'Pay as you go', 'Others'];
	$scope.insurancePercentageOptions = ['1%', '2%', '3%', '4%', '5%', '6%', '7%', '8%', '9%', '10%', '15%', '20%', '25+%'];
	$scope.resetValues = function() {
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
	};

	$scope.resetValues();
	$scope.isPhoneUser = function(){
		return (($scope.surveyData.everUsedAPhone !== undefined) && ($scope.surveyData.everUsedAPhone === "yes"));
	};

	$scope.isPotentialPhoneUser = function(){
		return (($scope.surveyData.everUsedAPhone !== undefined) && ($scope.surveyData.everUsedAPhone === "no"));
	};

	$scope.willAcquirePhone = function () {
		return (($scope.surveyData.acquirePlan !== undefined) && ($scope.surveyData.acquirePlan === "yes"));
	};

	$scope.willInsure = function() {
		return (($scope.surveyData.insuranceWill !== "undefined") && ($scope.surveyData.insuranceWill === "yes"))
	};

	$scope.existsCarrierWithInsurancePlan = function() {
		return (($scope.surveyData.knowCarrier !== undefined) && ($scope.surveyData.knowCarrier === "yes"))
	};

	$scope.canSubmit = function() {
		return (($scope.surveyData.acquirePlan !== undefined) && ($scope.surveyData.acquirePlan === "yes") && ($scope.surveyData.favoriteBrand !== undefined));
	};

	$scope.submitSurvey = function() {
		// send the survey data to the database
		$location.path('/');
	};
}