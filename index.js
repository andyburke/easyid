'use strict';

const extend = require( 'extend' );

const DEFAULTS = {
    length: 3,
    groups: 3,
    alphabet: '0123456789ABCDEFGHJKMNPQRTUVWXYZ',
    separator: '-'
};

module.exports = {
    generate: ( _options ) => {
        const options = extend( true, {}, DEFAULTS, _options );

        let groups = [];
        for ( let group_index = 0; group_index < options.groups; ++group_index ) {
            let group = [];
            for ( let character_index = 0; character_index < options.length; ++character_index ) {
                group.push( options.alphabet[ Math.floor( Math.random() * options.alphabet.length ) ] );
            }
            groups.push( group.join( '' ) );
        }

        return groups.join( options.separator );
    }
};