/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

const suiteConfig = {

    // called when the suite starts running
    'onStart': function onStartSuite () {

        console.log( this.name )
        this.results = []

    },

    // called between running benchmarks
    'onCycle': function onCycleSuite ( event ) {

        console.log( `Running: ${event.target.name}` )
        this.results.push( event.target )

    },

    // called when the suite completes running
    'onComplete': function onCompleteSuite () {

        this.results.sort( ( a, b ) => {

            if ( a.hz < b.hz ) {
                return 1
            }

            if ( a.hz > b.hz ) {
                return -1
            }

            return 0

        } )

        for ( let i = 0, num = this.results.length ; i < num ; i++ ) {
            console.log( `${i}: ${String( this.results[ i ] )}` )
        }

        const fastest       = this.results[ 0 ]
        const slowest       = this.results[ this.results.length - 1 ]
        const speedIncrease = ( ( fastest.hz - slowest.hz ) / slowest.hz ) * 100
        console.log( `${fastest.name} is ${Math.round( speedIncrease )}% fastest than ${slowest.name}` )

    }

}

export { suiteConfig }
