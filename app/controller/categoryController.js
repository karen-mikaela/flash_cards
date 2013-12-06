(function () {

    var categoryController = function ($scope) {
        $scope.categories = [];
        init()

        $scope.refreshCategories = function () {
            init();
        }

        function init() {
            getCategories();
        }

        function getCategories() {
            $scope.categories = [
                {"name": "Object"},
                {"name": "Expression"},
                {"name": "Clothes"}
                ];
        }
    };

    angular.module('flashCardApp').controller('CategoryController',
        ['$scope',  categoryController]);

}());