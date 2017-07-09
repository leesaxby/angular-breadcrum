import childOneA from './childOneA.html';
import styles from './childOneA.scss';

export default {
  templateUrl: childOneA,
  controller( $state) {
    $state.go('.', {childOne: 'This is child ones nam 22222222e', childOneA: 'CHILD ONE A'});
  }
};
