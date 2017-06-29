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
                        childOne: 'Child One'
                    }
                })
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
                        childOneA: 'Child One A'
                    }
                })
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
