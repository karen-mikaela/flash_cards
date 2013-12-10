(function () {

    var categoryFactory = function () {
        var categories = [
                {"name": "Object"},
                {"name": "Expression"},
                {"name": "Clothes"}
                ];
        var categoriesFactory = {};

        categoriesFactory.getCategories = function(){
            return categories;
        };

        return categoriesFactory;

    };

    angular.module('flashCardApp').factory('categoryFactory',
        [categoryFactory]);
}());