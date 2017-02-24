var baseController = angular.module('baseController', []);
baseController.controller('BaseCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

    // 导航条
    $scope.navTypeSelected = 0;
    if ($location.path().indexOf("/home") !== -1) {
        $scope.navTypeSelected = 0;
    }
    if ($location.path().indexOf("/homework") !== -1) {
        $scope.navTypeSelected = 1;
    }
    if ($location.path().indexOf("/learn") !== -1) {
        $scope.navTypeSelected = 2;
    }
    if ($location.path().indexOf("/class") !== -1) {
        $scope.navTypeSelected = 3;
    }
    if ($location.path().indexOf("/ask") !== -1) {
        $scope.navTypeSelected = 4;
    }
    if ($location.path().indexOf("/zone") !== -1) {
        $scope.navTypeSelected = 5;
    }

    $scope.selectNavType = function(type) {
        if (angular.isDefined(type)) {
            $scope.navTypeSelected = type;
        }
    };
}]);