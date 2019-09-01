bookBoxApp.directive("loggedInNavbar", function(){
        return{
            restrict: 'AECM',
            templateUrl: '/BookBox/BookBoxUX/app/shared/directives/loggedInNavBar/loggedInNavBar.html',
            replace: true,
            controller:"loggedInNavBarCtrl",
            scope:{
                currentSelection:"="
            }
        }
    })