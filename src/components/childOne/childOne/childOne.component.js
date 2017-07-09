import childOne from './childOne.html';
import styles from './childOne.scss';

export default {
  templateUrl: childOne,
  controller($state) {
    this.$onInit = () => {
        $state.go('.', {childOne: 'This is child ones name'});
    }
  }
};
