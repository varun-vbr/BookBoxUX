    bookBoxApp.service("anonymousService",['$http', function($http){
                this.anonymousUserInfoUrl="http://localhost:8081/BookBoxAPI/users/anonymous";
                this.userInfo;
                var anonymousService = {};
                anonymousService.getAnonymousUserInfo=function(){
                        return $http.get("http://localhost:8081/BookBoxAPI/users/anonymous", {headers:{'Cache-Control': 'no-cache'}});    
                }
                 return anonymousService;

            }]);
