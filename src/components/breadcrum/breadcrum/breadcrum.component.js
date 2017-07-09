import breadcrum from './breadcrum.html';
import styles from './breadcrum.scss';

export default {
    templateUrl: breadcrum,
    controller ($state, $transitions) {
        const ctrl = this;
        console.log("breadcrum comp fired")
        ctrl.$onInit = () => {
            ctrl.crums = getCrums();
        };

        $transitions.onSuccess({}, (transition) => {
            // Check if state change is dynaimic to prevent calling
            // getCrumbs() on regular (non dynamic state change).
            if (transition.dynamic()) {
                ctrl.crucrumsmbs = getCrums();
            }
        });

        const getCrums = () => {
            return Object.keys($state.$current.includes)
                        .map(state => {
                            // If state params contain custom name use that else use formatted state name.
                            let crum = formatCrum(state);
                            let text = $state.params[crum] || crum;
                            return {
                                state,
                                stateName: crum,
                                text
                            };
                        });
        };

        const formatCrum = (crum) => {
            return crum.includes('.') ? crum.substring(crum.lastIndexOf('.') + 1) : crum
        };
    }
}
