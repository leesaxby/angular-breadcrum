import root from './root/root.module.js'
import main from './main/main.module.js'
import childOne from './childOne/childOne.module.js'
import childTwo from './childTwo/childTwo.module.js'
import breadcrum from './breadcrum/breadcrum.module.js'

export default angular.module('components', [
		root,
		main,
		childOne,
		childTwo,
		breadcrum
]).name;