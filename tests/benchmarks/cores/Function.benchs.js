/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import Benchmark                      from 'benchmark'
import { default as checkTypes }      from 'check-types'
import { default as enricomarino_is } from 'is'
import * as isWhat                    from 'is-what'
import { default as stdarg_is }       from 'is2'
import { default as kindOf }          from 'kind-of'
import { typeCheck }                  from 'type-check'
import { default as typeOf }          from 'typeof'
import { default as _ }               from 'underscore'
import {
    is,
    isFunction
}                                     from '../../../builds/is-everywhere.esm'
import { benchConfig }                from '../../utils/BenchConfig'
import { suiteConfig }                from '../../utils/SuiteConfig'
// #if IS_KEEP_ON_IIFE_BUILD
import { default as sindresorhus_is } from '@sindresorhus/is'
// #endif

Benchmark
    .Suite( 'isFunction', suiteConfig )
    .add( 'Itee/is-everywhere is_Type(myVar)', function () {

        let doSomething = null
        if ( isFunction( this.whatAmI ) ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Function )
    .add( 'Itee/is-everywhere is_.type(myVar)', function () {

        let doSomething = null
        if ( is.function( this.whatAmI ) ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Function )
    .add( 'Itee/is-everywhere myVar.is_Type', function () {

        let doSomething = null
        if ( this.whatAmI.is_Function ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Function )
    .add( 'Itee/is-everywhere myVar.is_.Type', function () {

        let doSomething = null
        if ( this.whatAmI.is_.Function ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Function )
    .add( 'Itee/is-everywhere myVar.is_[\'Type\']', function () {

        let doSomething = null
        if ( this.whatAmI.is_[ 'Function' ] ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Function )
    .add( 'underscore', function () {

        let doSomething = null
        if ( _.isFunction( this.whatAmI ) ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Function )
    .add( 'stdarg/is2', function () {

        let doSomething = null
        if ( stdarg_is.function( this.whatAmI ) ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Function )
    .add( 'type-check', function () {

        let doSomething = null
        if ( typeCheck( 'Function', this.whatAmI ) ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Function )
    .add( 'check-types', function () {

        let doSomething = null
        if ( checkTypes.function( this.whatAmI ) ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Function )
    .add( 'mesqueeb/is-what', function () {

        let doSomething = null
        if ( isWhat.isFunction( this.whatAmI ) ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Function )
    .add( 'enricomarino/is', function () {

        let doSomething = null
        if ( enricomarino_is.function( this.whatAmI ) ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Function )
    .add( 'CodingFu/typeof', function () {

        let doSomething = null
        if ( typeOf( this.whatAmI ) === 'function' ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Function )
    .add( 'jonschlinkert/kind-of', function () {

        let doSomething = null
        if ( kindOf( this.whatAmI ) === 'function' ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Function )
    // #if IS_KEEP_ON_IIFE_BUILD
    .add( 'sindresorhus/is', function () {

        let doSomething = null
        if ( sindresorhus_is( this.whatAmI ) === 'Function' ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Function )
    // #endif
    .run()
