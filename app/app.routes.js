    bookBoxApp.config(function($routeProvider, $locationProvider){

        $routeProvider
        .when("/", {
            templateUrl: "/app/components/anonymousHomePage/anonymousHomePage.html",
            controller:"anonymousHomeCtrl"
        })
        .when("/bookDetails",{
            templateUrl:"/app/components/anonymousBookPage/anonymousBookPage.html",
            controller:"anonymousBookPageCtrl"
        })
        .when("/categories",{
            templateUrl:"/app/components/anonymousCategoryPage/anonymousCategoryPage.html",
            controller:"anonymousCategoryPageCtrl"
        });
    })