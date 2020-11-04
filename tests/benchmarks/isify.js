/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import {
    IsEverywhere,
    standardsBuiltInObjects
} from '../../builds/is-everywhere.esm'

/**
 * Apply isify function to provided basic javascript stuff
 */
IsEverywhere.applyTo( standardsBuiltInObjects, {
    skipIfExist: false,
    silent:      false
} )
