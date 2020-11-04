/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe */

import {
    IsEverywhere,
    standardsBuiltInObjects
}                        from '../../builds/is-everywhere.esm'
import { globalRoot }    from '../../sources/cores/global'
import { _coresUnits }   from './cores/_cores.units'

IsEverywhere.applyTo( standardsBuiltInObjects, {
    skipIfExist: false,
    silent:      false
} )

describe( 'Itee#Is-Everywhere', () => {

    _coresUnits.call( globalRoot )

} )
