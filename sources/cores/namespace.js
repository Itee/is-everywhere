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

    this.name            = name
    this.subClassesNames = subClassesNames

}

export { Namespace }




