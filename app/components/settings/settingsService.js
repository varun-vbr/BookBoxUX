bookBoxApp.service('settingsService',['$http',
                                       function($http){
                                          var settingsService={};
                                        
                                          settingsService.getAllPfdCategoriesForUser=function(username){
                                              return $http.get("http://localhost:8081/BookBoxAPI/users/preferredCategories/"+username, {headers:{'Cache-Control': 'no-cache'}});
                                          }   
                                          settingsService.addPreferredCategory=function(userId,categoryId){
                                                var jsonString=JSON.stringify({userId:userId, categoryId:categoryId});
                                                return $http.post('http://localhost:8081/BookBoxAPI/users/addPfdCategory', jsonString);
                                           }   
                                           settingsService.removePreferredCategory=function(userId,categoryId){
                                                var jsonString=JSON.stringify({userId:userId, categoryId:categoryId});
                                                return $http.post('http://localhost:8081/BookBoxAPI/users/removePfdCategory', jsonString);
                                           }  
                                           
                                           return settingsService;
                                       }])