class dataCtrl {

	constructor() {
		var ctrl = this;
		ctrl.pokemon = [];


	}

	pokemonData(){
		const ctrl = this;
		const pokemon = require('pokemontcgsdk')

		pokemon.card.find('base1-4')
		.then(result => {
			console.log(result.card.name)
		})
	}
}

export default dataCtrl;