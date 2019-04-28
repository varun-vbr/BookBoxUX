    bookBoxApp.config(function($routeProvider, $locationProvider){

        $routeProvider
        .when("/", {
            templateUrl: "/BookBox/BookBoxUX/app/components/anonymousHomePage/anonymousHomePage.html",
            controller:"anonymousHomeCtrl"
        })
        .when("/bookDetails",{
            templateUrl:"/BookBox/BookBoxUX/app/components/anonymousBookPage/anonymousBookPage.html",
            controller:"anonymousBookPageCtrl"
        })
        .when("/categories",{
            templateUrl:"/BookBox/BookBoxUX/app/components/anonymousCategoryPage/anonymousCategoryPage.html",
            controller:"anonymousCategoryPageCtrl"
        });
    })