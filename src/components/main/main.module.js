import angular from 'angular';
import router from 'angular-ui-router';
import main from './main/main.component.js';

export default angular.module('main', [router])
    .component('main', main)
    .config(function ($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/main',
                views: {
                    'main@': {
                        component: 'main'
                    },
                    'breadcrum@': {
                        component: 'breadcrum'
                    }
                }
            })

    }).name;
