(function () {

    var categoryController = function ($scope, categoryFactory) {
        $scope.categories = [];
        init()

        $scope.refreshCategories = function () {
            init();
        }

        function init() {
            getCategories();
        }

        function getCategories() {
            $scope.categories = categoryFactory.getCategories();
        }
    };

    angular.module('flashCardApp').controller('CategoryController',
        ['$scope', 'categoryFactory', categoryController]);

}());