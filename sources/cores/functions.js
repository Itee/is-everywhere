/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */


function isNull ( value ) {
    return Object.is( value, null )
}

function isNotNull ( value ) {
    return !Object.is( value, null )
}

function isUndefined ( value ) {
    return Object.is( value, undefined )
}

function isNotUndefined ( value ) {
    return !Object.is( value, undefined )
}

function isNullOrUndefined ( value ) {
    return value === null || value === undefined
}

function isNotNullNorUndefined ( value ) {
    return value !== null && value !== undefined
}

function isObject ( value ) {
    return isNotNullNorUndefined( value ) && Object.is( value.constructor, Object )
}

function isObject_0 ( value ) {

    if ( value === undefined || value === null ) {
        return false
    }

    return Object.is( value.constructor, Object )

}

function isObject_1 ( _obj ) {

    if ( typeof _obj !== 'object' || _obj === null ) {
        return false
    }

    var _test = _obj
    return ( function () {
        while ( !false ) {
            if ( Object.getPrototypeOf( _test = Object.getPrototypeOf( _test ) ) === null ) {
                break
            }
        }
        return Object.getPrototypeOf( _obj ) === _test
    } )()
}

function isNotObject ( value ) {
    return !isObject( value )
}

function isFunction ( value ) {
    return Object.is( value.constructor, Function )
}

function isArray ( value ) {

    return Array.isArray( value )

}

function isArrayEmpty ( array ) {

    return ( array.length === 0 )

}

function isArrayNotEmpty ( array ) {
    return ( array.length !== 0 )
}

function isBoolean ( value ) {
    return Object.is( value.constructor, Boolean )
}

function isSymbol ( value ) {
    return Object.is( value.constructor, Symbol )
}

function isError ( value ) {
    return Object.is( value.constructor, Error )
}

function isEvalError ( value ) {
    return Object.is( value.constructor, EvalError )
}

function isInternalError ( value ) {
    return Object.is( value.constructor, InternalError )
}

isArray.Empty     = isArrayEmpty
isArray.Not.Empty = isArrayNotEmpty

const is = {
    Null:          isNull,
    Undefined:     isUndefined,
    Array:         isArray,
//        array: (()=>{
//
//            isArray.empty = isArrayEmpty
//            isArray.not.empty = isArrayNotEmpty
//
//            return isArray
//
//        })(),
    object:        isObject,
    function:      isFunction,
    boolean:       isBoolean,
    symbol:        isSymbol,
    error:         isError,
    evalError:     isEvalError,
    internalError: isInternalError,
    Not:           {
        object: isNotObject,
        Array: isNotArray
    }
}

export {
    is,
    isNull,
    isUndefined,
    isObject,
    isObject_0,
    isArray,
    isArrayEmpty,
    isNotObject,
    isFunction,
    isBoolean,
    isSymbol,
    isError,
    isEvalError,
    isInternalError
}
