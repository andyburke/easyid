
# easyid

Generates easy, human-readable ids.

## Examples

```javascript
const easyid = require( 'easyid' );

console.log( easyid.generate() );
// outputs: Q8Y-521-7TW

console.log( easyid.generate( {
    groups: 4
} ) );
// outputs: MV0-2KG-YB2-GQA

console.log( easyid.generate( {
    length: 5
} ) );
// outputs: 3672P-68JF9-JJ751

console.log( easyid.generate( {
    separator: '/'
} ) );
// outputs: XFZ/5EC/P6U

console.log( easyid.generate( {
    alphabet: '0123456789'
} ) );
// outputs: 342-707-758
```

## About

easyid generates random, human readable ids that are useful for things like two factor authentication. The default alphabet avoids
potentially confusing characters, for instance for reading over the phone or avoiding confusion between L, l and 1.

You can specify the length and number of groups, the group separator and the alphabet.

Your address space and collision chance is determined by the total length of your id and the size of the alphabet.

## Options

### length (number, default: 3)

The length of each group.

### groups (number, default: 3)

The number of groups.

### separator (string, default: '-')

The separator character between groups.

### alphabet (string, default: '0123456789ABCDEFGHJKMNPQRTUVWXYZ')

The alphabet to randomly select characters from.

## License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
