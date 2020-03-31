bookBoxApp.service("editUserService",["$http",function($http){
    var editUserService={};
    editUserService.editUserDetails=function(jsonString){
        return $http.put("http://localhost:8081/BookBoxAPI/users/update", jsonString);
    }
    return editUserService;
}])