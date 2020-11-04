import { globalRoot } from './global'
import { Namespace } from './namespace'

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
} )

const SetPropertyTo = Object.freeze( {
    Constructor:             1,
    Prototype:               2,
    ConstructorAndPrototype: 4
} )

class IsEverywhere {

    static applyTo ( objects = [], options = {} ) {

        const _objects = ( objects.isArray || ( typeof Array.isArray === 'function' && Array.isArray( objects ) ) ) ? objects : [ objects ]

        const _options = {
            prefix:        options.prefix || 'is_',
            setPropertyAs: options.setPropertyAs || SetPropertyAs.PrimitiveAndObject,
            setPropertyTo: options.setPropertyTo || SetPropertyTo.ConstructorAndPrototype,
            skipIfExist:   options.skipIfExist !== false
        }

        const warn = IsEverywhere._warnIf( options.silent )

        for ( let [ index, object ] of Object.entries( _objects ) ) {

            if ( object === undefined ) {
                warn( `Try to isify an undefined value at index [${index}]` )
                continue
            }

            if ( object === null ) {
                warn( `Try to isify an null value at index [${index}]` )
                continue
            }

            if ( typeof object !== 'function' && typeof object !== 'object' ) {
                warn( `Try to isify a primitive value ${object} at index [${index}]` )
                continue
            }

            const objectName = object.name || Object.prototype.toString.call( object ).slice( 8, -1 )
            if ( objectName === undefined ) {
                warn( `Unable to found name for ${object} at index [${index}]` )
                continue
            }

            const capitalizedObjectName = objectName.charAt( 0 ).toUpperCase() + objectName.slice( 1 )
            const topLevelPropertyName  = `${_options.prefix}${capitalizedObjectName}`

            if ( _options.setPropertyTo & SetPropertyTo.Constructor || _options.setPropertyTo & SetPropertyTo.ConstructorAndPrototype ) {

                if ( _options.setPropertyAs & SetPropertyAs.Primitive || _options.setPropertyAs & SetPropertyAs.PrimitiveAndObject ) {

                    if ( _options.skipIfExist && object[ topLevelPropertyName ] ) {
                        warn( `${object} constructor at index [${index}] already contain a static property '${topLevelPropertyName}'. Skip the isification of the constructor !` )
                        continue
                    }

                    try {

                        Object.defineProperty( object, topLevelPropertyName, {
                            value:        true,
                            writable:     false,
                            configurable: false,
                            enumerable:   false
                        } )

                    } catch ( error ) {

                        if ( error instanceof TypeError && error.message.includes( 'Cannot redefine property' ) ) {
                            warn( `It seems that you are trying to isify multiple times ${objectName}. You cannot redefine the property ${objectName}.${topLevelPropertyName} !` )
                        } else {
                            warn( error )
                        }

                    }

                }

                if ( _options.setPropertyAs & SetPropertyAs.Object || _options.setPropertyAs & SetPropertyAs.PrimitiveAndObject ) {

                    if ( _options.skipIfExist && object[ _options.prefix ] ) {
                        warn( `${object} constructor at index [${index}] already contain a static property '${_options.prefix}'. Skip the isification of the constructor !` )
                        continue
                    }

                    try {

                        Object.defineProperty( object, _options.prefix, {
                            value:        { [ capitalizedObjectName ]: true },
                            writable:     false,
                            configurable: false,
                            enumerable:   false
                        } )

                    } catch ( error ) {

                        if ( error instanceof TypeError && error.message.includes( 'Cannot redefine property' ) ) {
                            warn( `It seems that you are trying to isify multiple times ${objectName}. You cannot redefine the property ${objectName}.${_options.prefix}.${capitalizedObjectName} !` )
                        } else {
                            warn( error )
                        }

                    }

                }

            }

            if ( _options.setPropertyTo & SetPropertyTo.Prototype || _options.setPropertyTo & SetPropertyTo.ConstructorAndPrototype ) {

                if ( !object.prototype ) {
                    warn( `${object} at index [${index}] doesn't contain a prototype. Skip the isification of the prototype !` )
                    continue
                }

                if ( _options.setPropertyAs & SetPropertyAs.Primitive || _options.setPropertyAs & SetPropertyAs.PrimitiveAndObject ) {

                    if ( _options.skipIfExist && object.prototype[ topLevelPropertyName ] ) {
                        warn( `${object} at index [${index}] prototype already contain a static property '${topLevelPropertyName}'. Skip the isification of the prototype !` )
                        continue
                    }

                    try {

                        Object.defineProperty( object.prototype, topLevelPropertyName, {
                            value:        true,
                            writable:     false,
                            configurable: false,
                            enumerable:   false
                        } )

                    } catch ( error ) {

                        if ( error instanceof TypeError && error.message.includes( 'Cannot redefine property' ) ) {
                            warn( `It seems that you are trying to isify multiple times ${objectName}. You cannot redefine the property ${objectName}.prototype.${topLevelPropertyName} !` )
                        } else {
                            warn( error )
                        }

                    }

                }

                if ( _options.setPropertyAs & SetPropertyAs.Object || _options.setPropertyAs & SetPropertyAs.PrimitiveAndObject ) {

                    if ( _options.skipIfExist && object.prototype[ _options.prefix ] ) {
                        warn( `${object} at index [${index}] prototype already contain a static property '${_options.prefix}'. Skip the isification of the prototype !` )
                        continue
                    }

                    try {

                        Object.defineProperty( object.prototype, _options.prefix, {
                            value:        { [ capitalizedObjectName ]: true },
                            writable:     false,
                            configurable: false,
                            enumerable:   false
                        } )

                    } catch ( error ) {

                        if ( error instanceof TypeError && error.message.includes( 'Cannot redefine property' ) ) {
                            warn( `It seems that you are trying to isify multiple times ${objectName}. You cannot redefine the property ${objectName}.prototype.${_options.prefix}.${capitalizedObjectName} !` )
                        } else {
                            warn( error )
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

        let objects    = []
        let objectName = null
        let object     = null

        for ( let index = 0, numberOfObjects = objectNames.length ; index < numberOfObjects ; index++ ) {

            objectName = objectNames[ index ]

            if ( ( objectName instanceof Namespace ) && namespace ) {

                object = namespace.data[ objectName.name ]
                if ( object ) {
                    objects.push( object )
                    objects.push( ...IsEverywhere._retrieveObjectsFromNames( objectName.subClassesNames, {
                        name: `${namespace.name}.${objectName.name}`,
                        data: object
                    } ) )
                } else {
                    console.error( `${namespace.name}.${objectName.name} does not seems to exist. Skip it !` )
                }

            } else if ( ( objectName instanceof Namespace ) && !namespace ) {

                object = globalRoot[ objectName.name ]
                if ( object ) {
                    objects.push( object )
                    objects.push( ...IsEverywhere._retrieveObjectsFromNames( objectName.subClassesNames, {
                        name: objectName.name,
                        data: object
                    } ) )
                } else {
                    console.error( `global.${objectName.name} does not seems to exist. Skip it !` )
                }

            } else if ( namespace ) {

                object = namespace.data[ objectName ]
                if ( object ) {
                    objects.push( object )
                } else {
                    console.error( `${namespace.name}.${objectName} does not seems to exist. Skip it !` )
                }

            } else {

                object = globalRoot[ objectName ]
                if ( object ) {
                    objects.push( object )
                } else {
                    console.error( `global.${objectName} does not seems to exist. Skip it !` )
                }

            }

        }

        return objects

    }

}

export {
    IsEverywhere,
    SetPropertyAs,
    SetPropertyTo
}
