    bookBoxApp.directive("searchBox", function(){
        return{
            restrict: 'AECM',
            templateUrl: '/app/shared/directives/searchBoxDirective/searchBoxDirective.html',
            replace: true,
            controller:"searchBoxDirectiveCtrl",
            scope:{
                selectedType:"=",
                searchText:"=",
                selectedItem:"="
            }
        }
    })