angular.module('ManaSelectorModule', [])
    .directive('manaSelector', [function () {
        var colors = ['generic', 'white', 'blue', 'black',
                      'red', 'green', 'colorless'];
        return {
            scope: {
                mana: '=ngModel'
            },
            restrict: 'A',
            require: 'ngModel',
            templateUrl: '/static/js/mana-selector/mana-selector.html',
            link: function () {
            },
            controller: ['$scope', function ($scope) {
                $scope.mana = $scope.mana || [{
                    color: 'generic',
                    value: 0
                }];

                $scope.colors = colors;

                $scope.addMana = function ($event) {
                    $event.preventDefault();

                    $scope.mana.push({
                        color: 'generic',
                        value: 0
                    });
                };
            }]
        };
    }])
    .filter('colorsFilter', function (colors, mana) {
        return function () {
            return colors.filter(function (current) {
                return mana.some(function (m) {
                    return m.color !== current;
                });
            });
        };
    });
