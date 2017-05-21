// create module
///<refrenece path="angular.mini.js/>"
(function () {
	"use strict";
	angular.module("calcModule",[])
	.controller("calcController",function($scope) {
		$scope.name="";
		$scope.totalName=0;
		$scope.dispalyNumeric = function () {
			var totalNameValue =
			calculatstring($scope.name)
			$scope.totalName = totalNameValue;
		};
		function calculatstring(string) {
			var totalStringValue =0;
			for(var i = 0;i < string.length; i++) {
				totalStringValue +=string.charCodeAt(1);
			}
			return totalStringValue;
		}
	});
})();
