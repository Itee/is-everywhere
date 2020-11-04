/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { default as sinIs }  from '@sindresorhus/is/dist/index'
import Benchmark             from 'benchmark'
import is                    from 'is'
import { default as kindOf } from 'kind-of'
import { default as typeOf } from 'typeof'
import { classOf }           from '../../utils/classOf.esm'

import { suiteConfig } from '../../utils/SuiteConfig'

function onBenchStart () {
    this.whatAmI = new Uint8ClampedArray()
}

Benchmark
    .Suite( 'Uint8ClampedArray', suiteConfig )
    .add( 'isEveryWhere', function () {

        let doSomething = null
        if ( this.whatAmI.isUint8ClampedArray ) {
            doSomething = true
        }
        return doSomething

    }, {
        'onStart': onBenchStart
    } )
    .add( 'operator instanceof', function () {

        let doSomething = null
        if ( this.whatAmI instanceof Uint8ClampedArray ) {
            doSomething = true
        }
        return doSomething

    }, {
        'onStart': onBenchStart
    } )
    .add( 'operator typeof', function () {

        let doSomething = null
        if ( typeof this.whatAmI === 'uint8clampedarray' ) {
            doSomething = true
        }
        return doSomething

    }, {
        'onStart': onBenchStart
    } )
    .add( 'typeOf', function () {

        let doSomething = null
        if ( typeOf( this.whatAmI ) === 'uint8clampedarray' ) {
            doSomething = true
        }
        return doSomething

    }, {
        'onStart': onBenchStart
    } )
    .add( 'throwneous', function () {

        let doSomething = null
        if ( typeOf( this.whatAmI ) === 'foobar' ) {
            doSomething = true
        } else {
            throw TypeError( 'Throneouse fail' )
        }
        return doSomething

    }, {
        'onStart': onBenchStart
    } )
    .add( 'kindOf', function () {

        let doSomething = null
        if ( kindOf( this.whatAmI ) === 'uint8clampedarray' ) {
            doSomething = true
        }
        return doSomething

    }, {
        'onStart': onBenchStart
    } )
    .add( 'classOf', function () {

        let doSomething = null
        if ( classOf( this.whatAmI ) === '[object Uint8ClampedArray]' ) {
            doSomething = true
        }
        return doSomething

    }, {
        'onStart': onBenchStart
    } )
    .run()
