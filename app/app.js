var flashCardApp = angular.module('flashCardApp',["ngRoute"]);

var controllers = {};

controllers.CardController = function($scope, cardFactory ){
     $scope.cards = [];
     init()
     function init(){
        $scope.cards = cardFactory.getCards();
     }

};

controllers.CategoryController = function($scope){
     $scope.categories = [
            {"name": "Object"},
            {"name": "Expression"},
            {"name": "Clothes"}
            ];
};

flashCardApp.controller(controllers);
flashCardApp.config(function($routeProvider){
    $routeProvider
        .when('/',
            {
                controller: 'CardController',
                templateUrl: 'app/view/card.html'
            })
        .when('/categories',
            {
                controller: 'CategoryController',
                templateUrl: 'app/view/category.html'
            })
        .otherwise({redirectTo:'/'});
});

flashCardApp.factory('cardFactory',function(){
    var cards = [
            {"front": "bowl","back":"tigela,pote", "category":"Object"},
            {"front": "good" ,"back": "bom","category":"Expression"},
            {"front": "cellphone" ,"back": "celular","category":"Object"},
            {"front": "scissors" ,"back": "tessoura","category":"Object"},
            {"front": "skirt" ,"back": "saia","category":"Clothes"}
            ];
    var factory = {};
    factory.getCards = function(){
        return cards;
    };
    //factory.postCard = function(card){};

    return factory;
});