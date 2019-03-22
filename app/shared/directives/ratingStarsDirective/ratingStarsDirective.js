bookBoxApp.directive('starRating', function () {
    return {
        restrict: 'AE',
        templateUrl:'/app/shared/directives/ratingStarsDirective/ratingStarsDirective.html' ,
        scope: {
            ratingValue: '=',
            max: '=',
            onRatingSelected: '&',
            readOnly:'='
        },
        link: function (scope, elem, attrs) {

            var updateStars = function () {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            };

            scope.toggle = function (index, readOnly){debugger;
               if(!readOnly){
                scope.ratingValue = index + 1;
                scope.onRatingSelected({
                    rating: index + 1
            
                });
               }
            };

            scope.$watch('ratingValue', function (oldVal, newVal) {
                if (newVal) {
                    updateStars();
                }
            });
        }
    }
});