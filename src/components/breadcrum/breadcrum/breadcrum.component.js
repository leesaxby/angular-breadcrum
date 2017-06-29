import breadcrum from './breadcrum.html';
import styles from './breadcrum.scss';

export default {
    templateUrl: breadcrum,
    controller ($state) {
        const ctrl = this;

        ctrl.$onInit = () => {
            ctrl.crums = getCrums()
        };

        const getCrums = () => {
            return Object.keys($state.$current.includes)
                    .map(stateName => {
                        // If state params contain custom name use that else use formatted state name.
                        let crum = formatCrum(stateName);
                        let text = $state.params[crum] || crum;
                        return {stateName, text};
                    });
        };

        const formatCrum = (crum) => {
            return crum.includes('.') ? crum.substring(crum.lastIndexOf('.') + 1) : crum
        };
    }
}
