import angular from 'angular';
import router from 'angular-ui-router';
import childOneA from './childOneA/childOneA.component.js';

export default angular.module('childOneA', [router])
        .component('childOneA', childOneA)
        .name