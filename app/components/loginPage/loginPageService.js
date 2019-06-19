bookBoxApp.service('loginPageService',['$http',
                                       function($http){
                                          var loginPageService={};
                                           loginPageService.login=function(jsonString){
                                             return $http.post('http://localhost:8081/BookBoxAPI/users/login', jsonString);
                                           }
                                           
                                           return loginPageService;
                                       }])