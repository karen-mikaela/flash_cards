(function () {

    var cardFactory = function () {
        var cards = [
            {"front": "bowl","back":"tigela,pote", "category":"Object"},
            {"front": "good" ,"back": "bom","category":"Expression"},
            {"front": "cellphone" ,"back": "celular","category":"Object"},
            {"front": "scissors" ,"back": "tessoura","category":"Object"},
            {"front": "skirt" ,"back": "saia","category":"Clothes"}
            ];
        var cardsFactory = {};
        cardsFactory.getCards = function(){
            return cards;
        };

        return cardsFactory;

    };

    angular.module('flashCardApp').factory('cardFactory',
        [cardFactory]);
}());