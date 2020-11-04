/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/objects
 * @desc Export the units tests about isObject method.
 * @requires {@link module:sources/cores/objects}
 *
 */

/* global Itee, describe, expect, it */

import { expect }     from 'chai'
import {
    isNotObject,
    isObject,
    isObject_0
}                     from '../../../../builds/is-everywhere.esm'
import { TestsUtils } from '../../../utils/is-everywhere.tests-utils.js'

function isObjectUnits () {

//    describe( 'isObject()', () => {
//
//        it( 'should return true only when the value is an object', TestsUtils.performTruthyTestOverDataMap.call( this, isObject, 'objects' ) )
//
//    } )

    describe( 'isObject_testotherutil()', () => {

        it( 'should return true only when the value is an object', TestsUtils.iterateOverDataMap.call(this, ( mapKey, setKey, value ) => {

            console.log(`${mapKey} => ${setKey} => ${value}`)
            if ( mapKey === 'objects' ) {
                expect( isObject( value ) ).to.be.true
            } else {
                expect( isObject( value ) ).to.be.false
            }

        } ) )

    } )

    describe( 'isObjectLiteral()', () => {

        it( 'should return true only when the value is an object', TestsUtils.iterateOverDataMap.call(this, ( mapKey, setKey, value ) => {

            console.log('$1 => $2 => $3', mapKey, setKey, value)

            if ( mapKey === 'objects' ) {
                expect( isObjectLiteral( value ) ).to.be.true
            } else {
                expect( isObjectLiteral( value ) ).to.be.false
            }

        } ) )

    } )

/*
    describe( 'isNotObject()', () => {

        it( 'should return false only when the value is an object', TestsUtils.performFalsyTestOverDataMap.call( this, isNotObject, 'objects' ) )

    } )
*/

}

export { isObjectUnits }
