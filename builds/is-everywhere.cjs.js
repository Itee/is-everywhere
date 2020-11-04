console.log('IsEveryWhere v0.0.0 - CommonJs')
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

function isUndefined ( value ) {
    return Object.is( value, undefined )
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

isArray.Empty     = isArrayEmpty;
isArray.Not.Empty = isArrayNotEmpty;

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
    not:           {
        object: isNotObject
    }
};

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

const globalRoot = typeof window !== 'undefined' ? window :
    typeof global !== 'undefined' ? global :
        Function( 'return this' )();

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

    // Allow to take into account Namespacing in the is_MyNamespace_MyClass way
    // Namespace('Foo', ['Bar', 'Baz'])

function Namespace ( name, subClassesNames = [] ) {

    // Allow instance creation without the `new` operator.
    if ( !( this instanceof Namespace ) ) {
        return new Namespace( name, subClassesNames )
    }

    this.name            = name;
    this.subClassesNames = subClassesNames;

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

const SetPropertyAs = Object.freeze( {
    Primitive:          1,
    Object:             2,
    PrimitiveAndObject: 4
} );

const SetPropertyTo = Object.freeze( {
    Constructor:             1,
    Prototype:               2,
    ConstructorAndPrototype: 4
} );

class IsEverywhere {

    static applyTo ( objects = [], options = {} ) {

        const _objects = ( objects.isArray || ( typeof Array.isArray === 'function' && Array.isArray( objects ) ) ) ? objects : [ objects ];

        const _options = {
            prefix:        options.prefix || 'is_',
            setPropertyAs: options.setPropertyAs || SetPropertyAs.PrimitiveAndObject,
            setPropertyTo: options.setPropertyTo || SetPropertyTo.ConstructorAndPrototype,
            skipIfExist:   options.skipIfExist !== false
        };

        const warn = IsEverywhere._warnIf( options.silent );

        for ( let [ index, object ] of Object.entries( _objects ) ) {

            if ( object === undefined ) {
                warn( `Try to isify an undefined value at index [${index}]` );
                continue
            }

            if ( object === null ) {
                warn( `Try to isify an null value at index [${index}]` );
                continue
            }

            if ( typeof object !== 'function' && typeof object !== 'object' ) {
                warn( `Try to isify a primitive value ${object} at index [${index}]` );
                continue
            }

            const objectName = object.name || Object.prototype.toString.call( object ).slice( 8, -1 );
            if ( objectName === undefined ) {
                warn( `Unable to found name for ${object} at index [${index}]` );
                continue
            }

            const capitalizedObjectName = objectName.charAt( 0 ).toUpperCase() + objectName.slice( 1 );
            const topLevelPropertyName  = `${_options.prefix}${capitalizedObjectName}`;

            if ( _options.setPropertyTo & SetPropertyTo.Constructor || _options.setPropertyTo & SetPropertyTo.ConstructorAndPrototype ) {

                if ( _options.setPropertyAs & SetPropertyAs.Primitive || _options.setPropertyAs & SetPropertyAs.PrimitiveAndObject ) {

                    if ( _options.skipIfExist && object[ topLevelPropertyName ] ) {
                        warn( `${object} constructor at index [${index}] already contain a static property '${topLevelPropertyName}'. Skip the isification of the constructor !` );
                        continue
                    }

                    try {

                        Object.defineProperty( object, topLevelPropertyName, {
                            value:        true,
                            writable:     false,
                            configurable: false,
                            enumerable:   false
                        } );

                    } catch ( error ) {

                        if ( error instanceof TypeError && error.message.includes( 'Cannot redefine property' ) ) {
                            warn( `It seems that you are trying to isify multiple times ${objectName}. You cannot redefine the property ${objectName}.${topLevelPropertyName} !` );
                        } else {
                            warn( error );
                        }

                    }

                }

                if ( _options.setPropertyAs & SetPropertyAs.Object || _options.setPropertyAs & SetPropertyAs.PrimitiveAndObject ) {

                    if ( _options.skipIfExist && object[ _options.prefix ] ) {
                        warn( `${object} constructor at index [${index}] already contain a static property '${_options.prefix}'. Skip the isification of the constructor !` );
                        continue
                    }

                    try {

                        Object.defineProperty( object, _options.prefix, {
                            value:        { [ capitalizedObjectName ]: true },
                            writable:     false,
                            configurable: false,
                            enumerable:   false
                        } );

                    } catch ( error ) {

                        if ( error instanceof TypeError && error.message.includes( 'Cannot redefine property' ) ) {
                            warn( `It seems that you are trying to isify multiple times ${objectName}. You cannot redefine the property ${objectName}.${_options.prefix}.${capitalizedObjectName} !` );
                        } else {
                            warn( error );
                        }

                    }

                }

            }

            if ( _options.setPropertyTo & SetPropertyTo.Prototype || _options.setPropertyTo & SetPropertyTo.ConstructorAndPrototype ) {

                if ( !object.prototype ) {
                    warn( `${object} at index [${index}] doesn't contain a prototype. Skip the isification of the prototype !` );
                    continue
                }

                if ( _options.setPropertyAs & SetPropertyAs.Primitive || _options.setPropertyAs & SetPropertyAs.PrimitiveAndObject ) {

                    if ( _options.skipIfExist && object.prototype[ topLevelPropertyName ] ) {
                        warn( `${object} at index [${index}] prototype already contain a static property '${topLevelPropertyName}'. Skip the isification of the prototype !` );
                        continue
                    }

                    try {

                        Object.defineProperty( object.prototype, topLevelPropertyName, {
                            value:        true,
                            writable:     false,
                            configurable: false,
                            enumerable:   false
                        } );

                    } catch ( error ) {

                        if ( error instanceof TypeError && error.message.includes( 'Cannot redefine property' ) ) {
                            warn( `It seems that you are trying to isify multiple times ${objectName}. You cannot redefine the property ${objectName}.prototype.${topLevelPropertyName} !` );
                        } else {
                            warn( error );
                        }

                    }

                }

                if ( _options.setPropertyAs & SetPropertyAs.Object || _options.setPropertyAs & SetPropertyAs.PrimitiveAndObject ) {

                    if ( _options.skipIfExist && object.prototype[ _options.prefix ] ) {
                        warn( `${object} at index [${index}] prototype already contain a static property '${_options.prefix}'. Skip the isification of the prototype !` );
                        continue
                    }

                    try {

                        Object.defineProperty( object.prototype, _options.prefix, {
                            value:        { [ capitalizedObjectName ]: true },
                            writable:     false,
                            configurable: false,
                            enumerable:   false
                        } );

                    } catch ( error ) {

                        if ( error instanceof TypeError && error.message.includes( 'Cannot redefine property' ) ) {
                            warn( `It seems that you are trying to isify multiple times ${objectName}. You cannot redefine the property ${objectName}.prototype.${_options.prefix}.${capitalizedObjectName} !` );
                        } else {
                            warn( error );
                        }

                    }

                }

            }

        }

    }

    static retrieveObjectsFromNames ( objectNames = [] ) {
        return IsEverywhere._retrieveObjectsFromNames( objectNames )
    }

    static _warnIf ( silent = true ) {

        return ( silent ) ? () => {} : console.warn

    }

    static _retrieveObjectsFromNames ( objectNames = [], namespace = null ) {

        let objects    = [];
        let objectName = null;
        let object     = null;

        for ( let index = 0, numberOfObjects = objectNames.length ; index < numberOfObjects ; index++ ) {

            objectName = objectNames[ index ];

            if ( ( objectName instanceof Namespace ) && namespace ) {

                object = namespace.data[ objectName.name ];
                if ( object ) {
                    objects.push( object );
                    objects.push( ...IsEverywhere._retrieveObjectsFromNames( objectName.subClassesNames, {
                        name: `${namespace.name}.${objectName.name}`,
                        data: object
                    } ) );
                } else {
                    console.error( `${namespace.name}.${objectName.name} does not seems to exist. Skip it !` );
                }

            } else if ( ( objectName instanceof Namespace ) && !namespace ) {

                object = globalRoot[ objectName.name ];
                if ( object ) {
                    objects.push( object );
                    objects.push( ...IsEverywhere._retrieveObjectsFromNames( objectName.subClassesNames, {
                        name: objectName.name,
                        data: object
                    } ) );
                } else {
                    console.error( `global.${objectName.name} does not seems to exist. Skip it !` );
                }

            } else if ( namespace ) {

                object = namespace.data[ objectName ];
                if ( object ) {
                    objects.push( object );
                } else {
                    console.error( `${namespace.name}.${objectName} does not seems to exist. Skip it !` );
                }

            } else {

                object = globalRoot[ objectName ];
                if ( object ) {
                    objects.push( object );
                } else {
                    console.error( `global.${objectName} does not seems to exist. Skip it !` );
                }

            }

        }

        return objects

    }

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

const standardsBuiltInObjects = IsEverywhere.retrieveObjectsFromNames( [
    'Object',
    'Function',
    'Boolean',
    'Symbol',
    'Error',
    'EvalError',
    'InternalError',
    'RangeError',
    'ReferenceError',
    'SyntaxError',
    'TypeError',
    'URIError',
    'Number',
    'BigInt',
    'Date',
    'String',
    'RegExp',
    'Array',
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
    'Float32Array',
    'Float64Array',
    'BigInt64Array',
    'BigUint64Array',
    'Map',
    'Set',
    'WeakMap',
    'WeakSet',
    'ArrayBuffer',
    'SharedArrayBuffer',
    'Atomics',
    'DataView',
    'JSON',
    'Promise',
    'Generator',
    'GeneratorFunction',
    'AsyncFunction',
    'Reflect',
    'Proxy',
    Namespace( 'Intl', [ 'Collator', 'DateTimeFormat', 'ListFormat', 'NumberFormat', 'PluralRules', 'RelativeTimeFormat', 'Locale' ] ),
    Namespace( 'WebAssembly', [ 'Module', 'Instance', 'Memory', 'Table', 'CompileError', 'LinkError', 'RuntimeError' ] )
] );

exports.IsEverywhere = IsEverywhere;
exports.Namespace = Namespace;
exports.SetPropertyAs = SetPropertyAs;
exports.SetPropertyTo = SetPropertyTo;
exports.is = is;
exports.isArray = isArray;
exports.isArrayEmpty = isArrayEmpty;
exports.isBoolean = isBoolean;
exports.isError = isError;
exports.isEvalError = isEvalError;
exports.isFunction = isFunction;
exports.isInternalError = isInternalError;
exports.isNotObject = isNotObject;
exports.isNull = isNull;
exports.isObject = isObject;
exports.isObject_0 = isObject_0;
exports.isSymbol = isSymbol;
exports.isUndefined = isUndefined;
exports.standardsBuiltInObjects = standardsBuiltInObjects;
//# sourceMappingURL=is-everywhere.cjs.js.map
