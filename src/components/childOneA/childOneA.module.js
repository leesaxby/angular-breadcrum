import angular from 'angular';
import router from 'angular-ui-router';
import childOneA from './childOneA/childOneA.component.js';

export default angular.module('childOneA', [router])
        .component('childOneA', childOneA)
        .config(function ($stateProvider) {
            $stateProvider
                .state('main.childOne.childOneA', {
                    url: '/childOneA',
                    views: {
                        'main@': {
                            component: 'childOneA'
                        },
                        'breadcrum@': {
                            component: 'breadcrum',
                        }
                    },
                    params: {
                        childOneA: {
                            value: 'Child One A',
                            dynamic: true
                        }
                    }
                })
        }).name;
