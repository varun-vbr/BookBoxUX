 bookBoxApp.directive("anonymousHeader", function(){
        return{
            restrict: 'AECM',
            templateUrl: '/BookBox/BookBoxUX/app/shared/directives/anonymousToolbar/anonymousToolbar.html',
            replace: true,
            controller:"anonymousHeaderCtrl"
            
        }
    })