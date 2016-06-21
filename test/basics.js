'use strict';

const easyid = require( '../index.js' );
const tape = require( 'tape' );

tape( 'exports properly', t => {
    t.ok( easyid, 'module exports' );
    t.equal( easyid && typeof easyid.generate, 'function', 'exports generate method' );
    t.end();
} );

tape( 'return type', t => {
    t.equal( typeof easyid.generate(), 'string', 'generate returns a string' );
    t.end();
} );

tape( 'group length', t => {
    t.ok( easyid.generate().match( /^[0123456789ABCDEFGHJKMNPQRTUVWXYZ]{3}-[0123456789ABCDEFGHJKMNPQRTUVWXYZ]{3}-[0123456789ABCDEFGHJKMNPQRTUVWXYZ]{3}$/ ), 'returns 3 groups of 3 by default' );
    t.ok( easyid.generate( {
        length: 5
    } ).match( /^[0123456789ABCDEFGHJKMNPQRTUVWXYZ]{5}-[0123456789ABCDEFGHJKMNPQRTUVWXYZ]{5}-[0123456789ABCDEFGHJKMNPQRTUVWXYZ]{5}$/ ), 'respects length setting' );
    t.end();
} );

tape( 'group count', t => {
    t.ok( easyid.generate( {
        groups: 4
    } ).match( /^[0123456789ABCDEFGHJKMNPQRTUVWXYZ]{3}-[0123456789ABCDEFGHJKMNPQRTUVWXYZ]{3}-[0123456789ABCDEFGHJKMNPQRTUVWXYZ]{3}-[0123456789ABCDEFGHJKMNPQRTUVWXYZ]{3}$/ ), 'respects groups setting' );
    t.end();
} );

tape( 'separator', t => {
    t.equal( easyid.generate( {
        separator: '$'
    } ).split( '$' ).length, 3, 'result has proper group separator' );
    t.end();
} );

tape( 'default alphabet', t => {
    t.ok( easyid.generate( {
        length: 20,
        groups: 1
    } ).match( /^[0123456789ABCDEFGHJKMNPQRTUVWXYZ]{20}$/ ), 'produces a string using the default alphabet' );
    t.end();
} );

tape( 'user specified alphabet', t => {
    t.ok( easyid.generate( {
        length: 20,
        groups: 1,
        alphabet: '0123456789'
    } ).match( /^[0123456789]{20}$/ ), 'produces a string using the user-specified alphabet' );
    t.end();
} );