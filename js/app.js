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

myApp.filter('trusted', ['$sce', function ($sce) {
    return function(video_id) {
        //var video_id = url.split('v=')[1].split('&')[0];
        return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + video_id);
    };
}]);