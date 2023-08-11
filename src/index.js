const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


function decode( expr ) {

    let decodedStr = '';
    let parseExprArr = [];
    let symbolsArr = [];

    for ( let i = 0; i <= expr.length - 1; i += 10 ) {
        parseExprArr.push( expr.slice( i, i + 10 ) )
    }

    const funky = ( str ) => {
        let arr = [];
        let symbolStr = '';
        let symbolArr = [];

        for ( let i = 0; i <= str.length - 1; i += 2 ) {
            arr.push( str.slice( i, i + 2 ) )
        }

        arr.forEach( el => {
            if ( el === '10' ) {
                symbolStr += '.'
            }
            if ( el === '11' ) {
                symbolStr += '-'
            }
        } )
        symbolArr.push( symbolStr )
        return symbolArr
    }

    parseExprArr.forEach( el => {
        if ( el === '**********' ) {
            symbolsArr.push( ' ' );
        } else {
            symbolsArr.push( funky( el )[0] )
        }
    } )

    symbolsArr.forEach( item => {
        if ( item === ' ' ) {
            decodedStr += ' '
        }
        if ( Object.keys( MORSE_TABLE ).includes( item ) ) {
            decodedStr += MORSE_TABLE[item]
        }
    } )

    return decodedStr
}

console.log( 'decode', decode( "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010" ) )
module.exports = {
    decode
}