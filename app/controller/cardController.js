(function () {

    var cardController = function ($scope, cardFactory, categoryFactory) {
        $scope.cards = [];
        $scope.categories = [];
        $scope.isCollapsed = false;
        init()

        $scope.refreshCards = function () {
            init();
        }

        function init() {
            $scope.cards = cardFactory.getCards();
            $scope.categories = categoryFactory.getCategories();
        }

        $scope.collapse = function(){
            $scope.isCollapsed = !$scope.isCollapsed;
        }
        $scope.close = function(){
            $scope.isCollapsed = true;
        }

    };

    angular.module('flashCardApp').controller('CardController',
        ['$scope', 'cardFactory', 'categoryFactory', cardController]);

}());