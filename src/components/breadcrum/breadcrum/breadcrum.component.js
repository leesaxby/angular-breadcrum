import breadcrum from './breadcrum.html';
import styles from './breadcrum.scss';

export default {
    templateUrl: breadcrum,
    controller ($state, $stateParams) {
        const ctrl = this;

        ctrl.$onInit = () => {

            // console.log($state)
//            ctrl.crums = $stateParams.breadcrum || ['Facility', 'Loan'];
            ctrl.crums = Object.keys($state.$current.includes);
        };

        ctrl.getCrum = (crum) => {
            let str;
            if (crum.indexOf('.') !== -1) {
                str = crum.substr(crum.indexOf('.') + 1)
            } else {
              console.log(crum)
                str = crum;
            }
            return str;
        }
    },

};
