(function () {

    var cardController = function ($scope, cardFactory, categoryFactory) {
        $scope.cards = [];
        $scope.categories = [];
        $scope.isCollapsed = true;
        init()

        $scope.refreshCards = function(){
            $scope.cards = cardFactory.getCards();
        }

        function init(){
            $scope.cards = cardFactory.getCards();
            $scope.categories = categoryFactory.getCategories();
        }

        $scope.collapse = function(){
            $scope.isCollapsed = !$scope.isCollapsed;
        }

        $scope.close = function(){
            $scope.isCollapsed = true;
        }

        $scope.add = function(){
            $scope.cards.push({"front": $scope.card.front,"back":$scope.card.back, "category":$scope.card.category});
            reset();
        }

        $scope.remove = function(){
            console.log(this.card);
            var index = $scope.cards.indexOf(this.card);
            console.log("vai eliminar "+ ($scope.cards[index]).front);
            console.log("vai eliminar de id  "+ index);
            $scope.cards.splice(index, 1); 

        }

        function reset(){
            $scope.card.front = "";
            $scope.card.back = "";
            $scope.card.category ="";
        }

        $scope.cancel =  function(){
            this.card.$edit = false;
            $scope.refreshCards();
        }


    };

    angular.module('flashCardApp').controller('CardController',
        ['$scope', 'cardFactory', 'categoryFactory', cardController]);

}());