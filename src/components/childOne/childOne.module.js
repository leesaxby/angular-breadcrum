import angular from 'angular';
import router from 'angular-ui-router';
import childOne from './childOne/childOne.component.js';

export default angular.module('childOne', [router])
        .component('childOne', childOne)
        .config(function ($stateProvider) {
            $stateProvider
                .state('main.childOne', {
                    url: '/childOne',
                    template: '<div>child one template</div>'
                })
        }).name;
