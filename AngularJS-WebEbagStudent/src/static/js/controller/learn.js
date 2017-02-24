var learnController = angular.module('learnController', []);

learnController.controller('learnCtrl', function($scope, $http) {
    console.log("enter learnController");


    // 成绩/荣誉 (0/1)
    $scope.rightNavType = 0;

    $scope.switchRightNavType = function(typ) {
        $scope.rightNavType = typ;
    };
    // 学科：语文/数学/英语 
});