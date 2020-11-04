/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module Config-Rollup-Test
 * @description The file manage the rollup configuration for build tests
 */

const packageInfos = require( '../package' )
const commonjs     = require( 'rollup-plugin-commonjs' )
const json         = require( 'rollup-plugin-json' )
const replace      = require( 'rollup-plugin-re' )
const resolve      = require( 'rollup-plugin-node-resolve' )
const builtins     = require( 'rollup-plugin-node-builtins' )

/**
 * Will create an appropriate configuration object for rollup, related to the given arguments.
 *
 * @generator
 * @return {Array.<json>} An array of rollup configuration
 */
function CreateTestsRollupConfigs ( /*options*/ ) {
    'use strict'

    return [
        // Benchs
        // For karma
        {
            input:     `tests/benchmarks/${packageInfos.name}.benchs.js`,
            external:  [ 'benchmark' ],
            plugins:   [
                replace( {
                    defines: {
                        IS_KEEP_ON_IIFE_BUILD: false
                    }
                } ),
                commonjs( {
                    include: 'node_modules/**'
                } ),
                resolve( {
                    preferBuiltins: true
                } ),
                builtins(),
                json()
            ],
            treeshake: false,
            output:    {
                globals: {
                    'benchmark': 'Benchmark'
                },
                indent:  '\t',
                format:  'iife',
                name:    'isEveryWhere.Benchs',
                file:    `tests/builds/${packageInfos.name}.benchs.iife.js`
            }
        },
        // For node
        {
            input:     `tests/benchmarks/${packageInfos.name}.benchs.js`,
            external:  [ 'benchmark', 'url' ],
            plugins:   [
                replace( {
                    defines: {
                        IS_KEEP_ON_CJS_BUILD: false
                    }
                } ),
                commonjs( {
                    include: 'node_modules/**'
                } ),
                resolve( {
                    preferBuiltins: false
                } ),
                json()
            ],
            treeshake: false,
            output:    {
                indent: '\t',
                format: 'cjs',
                name:   'isEveryWhere.Benchs',
                file:   `tests/builds/${packageInfos.name}.benchs.cjs.js`
            }
        },
        // Units
        // For karma
        {
            input:     `tests/units/${packageInfos.name}.units.js`,
            plugins:   [],
            treeshake: true,
            output:    {
                indent: '\t',
                format: 'iife',
                name:   'isEveryWhere.Units',
                file:   `tests/builds/${packageInfos.name}.units.iife.js`
            }
        },
        // For node
        {
            input:     `tests/units/${packageInfos.name}.units.js`,
            external:  [ 'chai' ],
            plugins:   [],
            treeshake: true,
            output:    {
                indent: '\t',
                format: 'cjs',
                name:   'isEveryWhere.Units',
                file:   `tests/builds/${packageInfos.name}.units.cjs.js`
            }
        },
    ]

}

module.exports = CreateTestsRollupConfigs
