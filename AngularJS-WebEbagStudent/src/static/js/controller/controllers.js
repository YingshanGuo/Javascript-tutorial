var controllers = angular.module('controllers', []);
var testUrl = "http://dreamtest.strongwind.cn:7320/";
var studentID = "?F_studentId=ab35fe83-c321-312a-bb7f-0941d4d8b291&F_accesstoken=7ad0acedf04577709853a58e4b97df51&F_subjectId=2&F_status=0&F_moment=0&F_period_id=&F_page=1&F_limit=10";
controllers.controller("MainController", function($scope, $http) {
    $http.get('./data/products.json').success(function(data) {
        console.log(" data is : ", data);
        console.log($scope);
        $scope.products = data.data.products;
    });
    $scope.order = 'name';


});

controllers.controller('DetailCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        console.log("enter DetailController");
        $scope.productId = $routeParams.productId;
    }
]);

app.controller('homeCtrl', function($scope, $http) {
    $http.get(testUrl + 'v1/student/api/homeworkList' + studentID).success(function(data) {
        console.log("Get homework JSON FILE !");
        console.log("data:", data);
        $scope.chineseHomework = data.F_data.F_list;
        // $scope.chineseHomework = data.chineseHomework;
        // $scope.mathHomework = data.mathHomework;
        // $scope.englishHomework = data.englishHomework; 
    });
});

controllers.controller('BaseCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

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