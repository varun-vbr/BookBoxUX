    bookBoxApp.config(function($routeProvider, $locationProvider){

        $routeProvider.when("/", {
            templateUrl: "/app/components/anonymousHomePage/anonymousHomePage.html",
            controller:"anonymousHomeCtrl"
        })
        .when("/searchAnonymous",{
            templateUrl:"/app/components/anonymousBookPage/anonymousBookPage.html",
            controller:"anonymousBookPageCtrl"
        });
    })