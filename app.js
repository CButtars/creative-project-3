var firstApp = angular.module('firstApp', []);
firstApp.controller('FirstController', function($scope) {
    $scope.first = 'Some';
    $scope.last = 'One';
    $scope.names = [];
    $scope.updateMessage = function() {
        var animals = ["elephant", "parrot", "fox", "jaguar", "opossum", "squid", "wolf", "alligator", "bear", "frog", "giraffe", "ostrich", "red_panda", "sea_otter", "sloth", "spotted_owl", "tortoise", "whale_shark"];
        var animal = animals[Math.floor(Math.random() * animals.length)];

        $scope.message = animal + '!';
        $scope.img = './img/' + animal + '.jpg';
        /*var name = { first: $scope.first.toUpperCase(), last: $scope.last.toUpperCase(), animal};
        $scope.names.push(name);
        */

    };
});
