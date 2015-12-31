/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global mainApp */

scotchApp.controller("mainController", function($scope, $http, constants) {

    //Controller variables
    $scope.users = [];
    $scope.roles = [];
    $scope.branches = [];
    $scope.cities=[];
    $scope.courses=[];
    $scope.courseCategories=[];
    $scope.states=[];
    $scope.instituteDetails=[];
    $scope.message = "Good Start";
    

    $scope.formLoginCheck = function() {
        
        $scope.dataLoading = true;

        $http({
            method: constants.requestMethodType,
            url: constants.serviceURL,
            headers: constants.requestHeaders,
            data: {
                "method": constants.methodNames.loginCheck, 
                "username": $scope.username, 
                "password": $scope.password
            }

        }).success(function(data) {

            $scope.dataLoading = false;

            window.location.href = "index.html";

        }).error(function(status) {

            $scope.dataLoading = false;

            $scope.errorMsg = status;
        });
    };

    $scope.addComment = function() {
        
        $scope.dataLoading = true;

        $http({
            method: constants.requestMethodType,
            url: constants.serviceURL,
            headers: constants.requestHeaders,
            data: {
                "method": constants.methodNames.loginCheck, 
                "userId": $scope.username, 
                "password": $scope.password
            }

        }).success(function(data) {

            $scope.dataLoading = false;


        }).error(function(status) {

            $scope.dataLoading = false;

            $scope.errorMsg = status;
        });
    };

    /*{
     "roleId": "ldxUEoDM5j",
     "username": "admin",
     "password": "admin",
     "email": "maheshbabu.somineni@gmail.com",
     "firstName": "Mahesh",
     "lastName": "Somineni",
     "isActive": true,
     "phoneNumber": "9876543",
     "isEdit": false,
     "method": "addOrEditUser",
     "userId": ""
     }*/
    $scope.addOrEditUser = function() {        
        
        $http({
            method: constants.requestMethodType,
            url: constants.serviceURL,
            headers: constants.requestHeaders,
            data: {
                "method": constants.methodNames.addOrEditUser, 
                "username": $scope.username, 
                "password": $scope.password,
                "roleId":$scope.roleId,
                "email":$scope.email,
                "firstName":$scope.firstname,
                "lastName":$scope.lastname,
                "phoneNumber":$scope.phonenumber,
                "isActive": Boolean($scope.isActive),
                "isEdit":false,
                "userId":""
            }

        }).success(function() {

            window.location.href = "users.html";

        }).error(function(status) {

            $scope.errorMsg = status;
        });
    };
    
    $scope.addOrEditInstitute = function() {        
        
        $http({
            method: constants.requestMethodType,
            url: constants.serviceURL,
            headers: constants.requestHeaders,
            data: {
                "method": constants.methodNames.addOrEditInstituteDetails, 
                "userId":$scope.userId,
                "isEdit":false,
                "name":$scope.institutename,
                "branchId":$scope.branchId
            }

        }).success(function() {

            window.location.href = "institutes.html";

        }).error(function(status) {

            $scope.errorMsg = status;
        });
    };
    $scope.addOrEditTrainer = function() {        
        
        $http({
            method: constants.requestMethodType,
            url: constants.serviceURL,
            headers: constants.requestHeaders,
            data: {
                "method": constants.methodNames.addOrEditTrainerDetails, 
                "userId":$scope.userId,
                "isEdit":false,
                "name":$scope.trainername,
                "instituteDetailId":$scope.instituteDetailId
            }

        }).success(function() {

            window.location.href = "trainers.html";

        }).error(function(status) {

            $scope.errorMsg = status;
        });
    };
    
    $scope.addOrEditBranch = function() {        
        
        $http({
            method: constants.requestMethodType,
            url: constants.serviceURL,
            headers: constants.requestHeaders,
            data: {
                "method": constants.methodNames.addOrEditBranch, 
                "cityId":$scope.cityId,
                "isEdit":false,
                "name":$scope.branchname,
                "branchId":""
            }

        }).success(function() {

            window.location.href = "branches.html";

        }).error(function(status) {

            $scope.errorMsg = status;
        });
    };
    
    $scope.addOrEditCourse = function() {        
        
        $http({
            method: constants.requestMethodType,
            url: constants.serviceURL,
            headers: constants.requestHeaders,
            data: {
                "method": constants.methodNames.addOrEditCourse, 
                "courseCategoryId":$scope.courseCategoryId,
                "isEdit":false,
                "name":$scope.coursename,
                "courseId":""
            }

        }).success(function() {

            window.location.href = "courses.html";

        }).error(function(status) {

            $scope.errorMsg = status;
        });
    };
    
    $scope.addOrEditCity = function() {        
        
        $http({
            method: constants.requestMethodType,
            url: constants.serviceURL,
            headers: constants.requestHeaders,
            data: {
                "method": constants.methodNames.addOrEditCity, 
                "stateId":$scope.stateId,
                "isEdit":false,
                "name":$scope.cityname,
                "cityId":""
            }

        }).success(function() {

            window.location.href = "cities.html";

        }).error(function(status) {

            $scope.errorMsg = status;
        });
    };
    
     $scope.addOrEditCourseCategory = function() {        
        
        $http({
            method: constants.requestMethodType,
            url: constants.serviceURL,
            headers: constants.requestHeaders,
            data: {
                "method": constants.methodNames.addOrEditCourseCategory, 
                "isEdit":false,
                "name":$scope.courseCategoryname,
                "courseCategoryId":""
            }

        }).success(function() {

            window.location.href = "courseCategories.html";

        }).error(function(status) {

            $scope.errorMsg = status;
        });
    };
   
    //Method for getting all the users response
    $scope.getAllUsers = function() {

        $http({
           method: constants.requestMethodTypeGET,
           url: constants.defaultAPIURL + constants.ClassNames.Users,
           headers: constants.requestHeaders
            
        }).success(function(data) {

            $scope.users = data['results'];

        }).error(function(status) {

            alert(status);
        });
    };
    
     //Method for getting all the users response
     
     $scope.getAllCities = function() {

        $http({
            method: constants.requestMethodTypeGET,
            url: constants.restAPIURL + constants.ClassNames.City,
            headers: constants.requestHeaders,
            data: {
                
            }

        }).success(function(data) {

            $scope.cities = data['results'];

        }).error(function(status) {

            alert(status);
        });
    };
    
    
    //Method for getting all the users response
     
     $scope.getAllStates = function() {

        $http({
            method: constants.requestMethodTypeGET,
            url: constants.restAPIURL + constants.ClassNames.State,
            headers: constants.requestHeaders,
            data: {
                
            }

        }).success(function(data) {

            $scope.states = data['results'];

        }).error(function(status) {

            alert(status);
        });
    };
    
    
    
    //Method for getting all the users response
    
     $scope.getAllCourseCategories = function() {

        $http({
            method: constants.requestMethodTypeGET,
            url: constants.restAPIURL + constants.ClassNames.CourseCategory,
            headers: constants.requestHeaders,
            data: {
                
            }

        }).success(function(data) {

            $scope.courseCategories = data['results'];

        }).error(function(status) {

            alert(status);
        });
    };
    
    //Method for getting all the users response
    $scope.getAllRoles = function() {

        $http({
            method: constants.requestMethodType,
            url: constants.serviceURL,
            headers: constants.requestHeaders,
            data: {
                
                "method": constants.methodNames.getAllRoles
            }

        }).success(function(data) {

            $scope.roles = data['result'];

        }).error(function(status) {

            alert(status);
        });
    };
    
    //Method for getting all the users response
    $scope.getAllBranches = function() {

        $http({
            method: constants.requestMethodTypeGET,
            url: constants.restAPIURL + constants.ClassNames.Branch,
            headers: constants.requestHeaders,
            data: {
                
            }

        }).success(function(data) {

            $scope.branches = data['results'];

        }).error(function(status) {

            alert(status);
        });
    };
    
     //Method for getting all the users response
    $scope.getAllCourses = function() {

        $http({
            method: constants.requestMethodTypeGET,
            url: constants.restAPIURL + constants.ClassNames.Course,
            headers: constants.requestHeaders,
            data: {
                
            }

        }).success(function(data) {

            $scope.courses = data['results'];

        }).error(function(status) {

            alert(status);
        });
    };
    //Method for getting all the users response
    $scope.getAllTrainerDetails = function() {

        $http({
            method: constants.requestMethodTypeGET,
            url: constants.restAPIURL + constants.ClassNames.TrainerDetail,
            headers: constants.requestHeaders,
            data: {
                
            }

        }).success(function(data) {

            $scope.trainers = data['results'];

        }).error(function(status) {

                 alert(status);
        });
    };
    
      //Method for getting all the users response
    $scope.getAllInstituteDetails = function() {

        $http({
            method: constants.requestMethodTypeGET,
            url: constants.restAPIURL + constants.ClassNames.InstituteDetail,
            headers: constants.requestHeaders,
            data: {
                
            }

        }).success(function(data) {

            $scope.instituteDetails = data['results'];

        }).error(function(status) {

            alert(status);
        });
    };
});
   

