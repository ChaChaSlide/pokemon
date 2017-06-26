import template from './data.html';
import controller from './data.controller';


let dataComponent = {
	bindings : {},
	template,
	controller: ['$rootScope', '$interval', controller],
	controllerAs: '$ctrl'
};

export default dataComponent;