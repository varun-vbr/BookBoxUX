    bookBoxApp.directive("searchBox", function(){
        return{
            restrict: 'AECM',
            templateUrl: '/BookBox/BookBoxUX/app/shared/directives/searchBoxDirective/searchBoxDirective.html',
            replace: true,
            controller:"searchBoxDirectiveCtrl",
            scope:{
                selectedType:"=",
                searchText:"=",
                selectedItem:"="
            }
        }
    })