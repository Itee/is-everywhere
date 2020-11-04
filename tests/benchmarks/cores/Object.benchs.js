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
    isObject,
    isObject_0
}                                     from '../../../builds/is-everywhere.esm'
import { benchConfig }                from '../../utils/BenchConfig'
import { suiteConfig }                from '../../utils/SuiteConfig'
// #if IS_KEEP_ON_IIFE_BUILD
import { default as sindresorhus_is } from '@sindresorhus/is'
// #endif

Benchmark
    .Suite( 'isObject', suiteConfig )
    .add( 'Itee/is-everywhere is_Type(myVar)', function () {

        let doSomething = null
        if ( isObject( this.whatAmI ) ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Object )
    .add( 'Itee/is-everywhere is_Type_0(myVar)', function () {

        let doSomething = null
        if ( isObject_0( this.whatAmI ) ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Object )
    .add( 'Itee/is-everywhere is_.type(myVar)', function () {

        let doSomething = null
        if ( is.object( this.whatAmI ) ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Object )
    .add( 'Itee/is-everywhere myVar.is_Type', function () {

        let doSomething = null
        if ( this.whatAmI.is_Object ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Object )
    .add( 'Itee/is-everywhere myVar.is_.Type', function () {

        let doSomething = null
        if ( this.whatAmI.is_.Object ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Object )
    .add( 'Itee/is-everywhere myVar.is_[\'Type\']', function () {

        let doSomething = null
        if ( this.whatAmI.is_[ 'Object' ] ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Object )
    .add( 'underscore', function () {

        let doSomething = null
        if ( _.isObject( this.whatAmI ) ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Object )
    .add( 'stdarg/is2', function () {

        let doSomething = null
        if ( stdarg_is.object( this.whatAmI ) ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Object )
    .add( 'type-check', function () {

        let doSomething = null
        if ( typeCheck( 'Object', this.whatAmI ) ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Object )
    .add( 'check-types', function () {

        let doSomething = null
        if ( checkTypes.object( this.whatAmI ) ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Object )
    .add( 'mesqueeb/is-what', function () {

        let doSomething = null
        if ( isWhat.isObject( this.whatAmI ) ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Object )
    .add( 'enricomarino/is', function () {

        let doSomething = null
        if ( enricomarino_is.object( this.whatAmI ) ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Object )
    .add( 'CodingFu/typeof', function () {

        let doSomething = null
        if ( typeOf( this.whatAmI ) === 'object' ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Object )
    .add( 'jonschlinkert/kind-of', function () {

        let doSomething = null
        if ( kindOf( this.whatAmI ) === 'object' ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Object )
    // #if IS_KEEP_ON_IIFE_BUILD
    .add( 'sindresorhus/is', function () {

        let doSomething = null
        if ( sindresorhus_is( this.whatAmI ) === 'Object' ) {
            doSomething = 'true'
        } else {
            doSomething = 'false'
        }
        return doSomething

    }, benchConfig.Object )
    // #endif
    .run()

