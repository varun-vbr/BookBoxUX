bookBoxApp.service('signUpService',['$http',
                                    function($http){
                                        var signUpService={};
                                        
                                        signUpService.doSignUp=function(userDetails){
                                            return $http.post('http://localhost:8081/BookBoxAPI/users/create', userDetails);
                                        }
                                        
                                        return signUpService;
                                    }]);