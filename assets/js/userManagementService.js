    bookBoxApp.service("userManagementService", function(){
        var currentUser;
        var userManagementService={};
        userManagementService.setCurrentUser=function(user){
            currentUser=user;
        }
        userManagementService.getCurrentUser=function(){
            return currentUser;
        }

        return userManagementService;
    })