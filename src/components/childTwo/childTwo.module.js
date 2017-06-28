import angular from 'angular';
import router from 'angular-ui-router';
import childTwo from './childTwo/childTwo.component.js';

export default angular.module('childTwo', [router])
        .component('childTwo', childTwo)
        .name
