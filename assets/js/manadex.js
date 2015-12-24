angular.module('ManaDex', [])
    .controller('CardForm', ['$scope', 'CardService', function ($scope, CardService) {
        $scope.card = {
            power: 0,
            toughness: 0,
            type: 'creature',
            rarity: 'common'
        };
        $scope.cardsInSet = 0;
        $scope.cardTypes = ['creature', 'enchantment', 'sorcery', 'instant',
                            'artifact', 'planeswalker', 'land'];

        $scope.addCard = function () {
            console.log('Adding Card');
            console.log('$scope', $scope);
            CardService.createCard($scope.card);
        };
    }])
    .factory('CardService', ['$http', function ($http) {
        return {
            createCard: function (card) {
                $http({
                    method: 'POST',
                    url: '/card',
                    data: card
                }).then(function (response) {
                    console.log('success', response);
                }, function (response) {
                    console.log('error', response);
                });
            },

            deleteCard: function (id) {
                $http({
                    method: 'DELETE',
                    url: '/card',
                    data: {
                        id: id
                    }
                }).then(function (response) {
                    console.log('success', response);
                }, function () {
                    console.log('error', response);
                });
            }
        };
    }])
    .factory('PartLookupService', ['$http', function ($http) {
        return {
            /*
             *  Needs planning, typeahead search on name field
             */
            nameTypeahead: function () {
            },

            /*
             *  Typeahead for known subtypes
             */
            subtypeTypeahead: function () {
            },

            /*
             *  Expansions is a big bit of info with a lot of attributes.
             *  Will put into DB
             *  http://mtgsalvation.gamepedia.com/Expansion#List_of_Magic_expansions_and_sets
             */
            getExpansions: function () {
            },

            /*
             *  May go into DB so to store current vs. former
             *  http://mtgsalvation.gamepedia.com/Evergreen
             */
            getEvergreenKeywords: function () {
            }
        };
    }]);
