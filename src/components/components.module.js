import root from './root/root.module.js'
import main from './main/main.module.js'
import childOne from './childOne/childOne.module.js'

export default angular.module('components', [
		root,
		main,
		childOne
]).name;