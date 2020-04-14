    bookBoxApp.service("userManagementService", function(){
        var currentUser;
        var userPath;
        var selectedUserBook;
        var userManagementService={};
        userManagementService.setCurrentUser=function(user){
            currentUser=user;
        }
        userManagementService.getCurrentUser=function(){
            return currentUser;
        }
        
        userManagementService.setUserPath=function(path){
            userPath=path;
        }
        
        userManagementService.getUserPath=function(){
            return userPath;
        }
        
        userManagementService.setUserBook=function(book){
            selectedUserBook=book;
        }
        
        userManagementService.getUserBook=function(){
            return selectedUserBook;
        }

        return userManagementService;
    })