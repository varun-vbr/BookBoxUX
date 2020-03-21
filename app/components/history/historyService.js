bookBoxApp.service("historyService",['$http', function($http){
              var historyService={}
                  historyService.getUserHistory=function(username){
                      return $http.get("http://localhost:8081/BookBoxAPI/users/history/"+username, {headers:{'Cache-Control': 'no-cache'}});
                  }
              
                 return historyService;

            }]);