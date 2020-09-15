'use strict';

const DEFAULTS = {
	length: 3,
	groups: 3,
	alphabet: '0123456789ABCDEFGHJKMNPQRTUVWXYZ',
	separator: '-'
};

module.exports = {
	generate: ( _options ) => {
		const options = Object.assign( {}, DEFAULTS, _options );

		return Array.from( {
			length: options.groups
		}, () => ( Array.from( {
			length: options.length
		}, () => ( options.alphabet[ Math.floor( Math.random() * options.alphabet.length ) ] ) ).join( '' ) ) ).join( options.separator );
	}
};