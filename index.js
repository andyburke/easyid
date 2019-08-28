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

        const groups = Array.from( {
            length: options.groups
        }, () => {
            return Array.from( {
                length: options.length
            }, () => {
                return options.alphabet[ Math.floor( Math.random() * options.alphabet.length ) ];
            } );
        } );

        return groups.map( group => group.join( '' ) ).join( options.separator );
    }
};