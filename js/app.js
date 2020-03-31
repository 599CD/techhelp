var myApp = angular.module('myApp',[]);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.items = [];

    $scope.init = function () {
        getData();
    }

    getData = () =>  {
        var file = 'data/items.json';

        $http.get(file)
        .then(function(response) {
            $scope.items = response.data.items;
        });
    };

    $scope.init();
});