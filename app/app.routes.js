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
        })
        .when("/login",{
            templateUrl:"/BookBox/BookBoxUX/app/components/loginPage/loginPage.html",
            controller:"loginPageCtrl"
        })
        .when("/loggedin",{
            templateUrl:"/BookBox/BookBoxUX/app/components/loggedInHomePage/loggedInHomePage.html",
            controller:"loggedInHomePageCtrl"
        })
        .when("/signup",{
            templateUrl:"/BookBox/BookBoxUX/app/components/signUpPage/signUpPage.html",
            controller:"signUpCtrl"
        });
    })