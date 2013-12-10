(function () {

    var cardController = function ($scope, cardFactory) {
        $scope.cards = [];
        init()

        $scope.refreshCards = function () {
            init();
        }

        function init() {
            $scope.cards = cardFactory.getCards();
            $scope.isCollapsed = false;
            console.log("ee"+$scope.isCollapsed);
        }

    };

    angular.module('flashCardApp').controller('CardController',
        ['$scope', 'cardFactory', cardController]);

}());