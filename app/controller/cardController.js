(function () {

    var cardController = function ($scope, cardFactory) {
        $scope.cards = [];
        init()

        $scope.refreshCards = function () {
            init();
        }

        function init() {
            $scope.cards = cardFactory.getCards();
        }

    };

    angular.module('flashCardApp').controller('CardController',
        ['$scope', 'cardFactory', cardController]);

}());