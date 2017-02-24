var homeController = angular.module('homeController', []);
var testUrl = "http://dreamtest.strongwind.cn:7320/";
var studentID = "?F_studentId=ab35fe83-c321-312a-bb7f-0941d4d8b291&F_accesstoken=7ad0acedf04577709853a58e4b97df51&F_subjectId=2&F_status=0&F_moment=0&F_period_id=&F_page=1&F_limit=10";

homeController.controller('homeCtrl', function($scope, $http) {
    $http.get(testUrl + 'v1/student/api/homeworkList' + studentID).success(function(data) {
        console.log("Get homework JSON FILE !");
        console.log("data:", data);
        $scope.chineseHomework = data.F_data.F_list;
        // $scope.chineseHomework = data.chineseHomework;
        // $scope.mathHomework = data.mathHomework;
        // $scope.englishHomework = data.englishHomework; 
    });
});