import angular from 'angular';
import router from 'angular-ui-router';
import childTwo from './childTwo/childTwo.component.js';

export default angular.module('childTwo', [router])
        .component('childTwo', childTwo)
        .config(function ($stateProvider) {
            $stateProvider
                .state('main.childTwo', {
                    url: '/childTwo',
                    views: {
                        'main@': {
                            component: 'childTwo'
                        },
                        'breadcrum@': {
                            component: 'breadcrum'
                        }
                    }
                })
        }).name;

