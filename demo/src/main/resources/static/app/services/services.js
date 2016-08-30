'use strict';
angular.module('services.listFactory', ['ngRoute','ngResource'])

    /*.factory('Items', function () {
        var data = {
            listado: []
    
        };
        return {
            getListado: function () {
                return data.listado;
            },
            save: function (todo) {
                data.listado.push(todo);
            }};
        
    });*/
        .factory('Items', function($resource) {
                return $resource('/items/:id'); 
            });
