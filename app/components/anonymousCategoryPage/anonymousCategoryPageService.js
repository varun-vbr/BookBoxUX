bookBoxApp.service("anonymousCategoryService", ['$http',function($http){
        var anonymousCategoryService={};
        var categoryDetails={name:'',books:[]};
        anonymousCategoryService.setCategoryDetails=function(details){
            categoryDetails=details;
        }
        anonymousCategoryService.getCategoryDetails=function(){
            return categoryDetails;
        }
        
        return anonymousCategoryService;
    }])