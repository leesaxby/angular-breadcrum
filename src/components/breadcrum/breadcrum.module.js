import angular from 'angular';
import router from 'angular-ui-router';
import breadcrum from './breadcrum/breadcrum.component.js';

export default angular.module('breadcrum', [router])
        .component('breadcrum', breadcrum)
        .name
