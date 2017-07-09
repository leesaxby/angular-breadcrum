import angular from 'angular';
import router from 'angular-ui-router';
import childOne from './childOne/childOne.component.js';

export default angular.module('childOne', [router])
        .component('childOne', childOne)
        .config(function ($stateProvider) {
            $stateProvider
                .state('main.childOne', {
                    url: '/childOne',
                    views: {
                        'main@': {
                            component: 'childOne'
                        },
                        'breadcrum@': {
                            component: 'breadcrum',
                        }
                    },
                    params: {
                        childOne: {
                            dynamic: true,
                            value: 'Child One'
                        }
                    }
                })
        }).name;
