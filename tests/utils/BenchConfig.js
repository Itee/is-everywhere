/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

export const benchConfig = {
    Object:            {
        'onStart': function () {
            this.whatAmI = new Object()
        }
    },
    Function:          {
        'onStart': function () {
            this.whatAmI = function func () {}
        }
    },
    Boolean:           {
        'onStart': function () {
            this.whatAmI = new Boolean()
        }
    },
    Symbol:            {
        'onStart': function () {
            this.whatAmI = new Symbol()
        }
    },
    Error:             {
        'onStart': function () {
            this.whatAmI = new Error()
        }
    },
    EvalError:         {
        'onStart': function () {
            this.whatAmI = new EvalError()
        }
    },
    InternalError:     {
        'onStart': function () {
            this.whatAmI = new InternalError()
        }
    },
    RangeError:        {
        'onStart': function () {
            this.whatAmI = new RangeError()
        }
    },
    ReferenceError:    {
        'onStart': function () {
            this.whatAmI = new ReferenceError()
        }
    },
    SyntaxError:       {
        'onStart': function () {
            this.whatAmI = new SyntaxError()
        }
    },
    TypeError:         {
        'onStart': function () {
            this.whatAmI = new TypeError()
        }
    },
    URIError:          {
        'onStart': function () {
            this.whatAmI = new URIError()
        }
    },
    Number:            {
        'onStart': function () {
            this.whatAmI = new Number()
        }
    },
    BigInt:            {
        'onStart': function () {
            this.whatAmI = new BigInt()
        }
    },
    Date:              {
        'onStart': function () {
            this.whatAmI = new Date()
        }
    },
    String:            {
        'onStart': function () {
            this.whatAmI = new String()
        }
    },
    RegExp:            {
        'onStart': function () {
            this.whatAmI = new RegExp()
        }
    },
    Array:             {
        'onStart': function () {
            this.whatAmI = new Array()
        }
    },
    Int8Array:         {
        'onStart': function () {
            this.whatAmI = new Int8Array()
        }
    },
    Uint8Array:        {
        'onStart': function () {
            this.whatAmI = new Uint8Array()
        }
    },
    Uint8ClampedArray: {
        'onStart': function () {
            this.whatAmI = new Uint8ClampedArray()
        }
    },
    Int16Array:        {
        'onStart': function () {
            this.whatAmI = new Int16Array()
        }
    },
    Uint16Array:       {
        'onStart': function () {
            this.whatAmI = new Uint16Array()
        }
    },
    Int32Array:        {
        'onStart': function () {
            this.whatAmI = new Int32Array()
        }
    },
    Uint32Array:       {
        'onStart': function () {
            this.whatAmI = new Uint32Array()
        }
    },
    Float32Array:      {
        'onStart': function () {
            this.whatAmI = new Float32Array()
        }
    },
    Float64Array:      {
        'onStart': function () {
            this.whatAmI = new Float64Array()
        }
    },
    BigInt64Array:     {
        'onStart': function () {
            this.whatAmI = new BigInt64Array()
        }
    },
    BigUint64Array:    {
        'onStart': function () {
            this.whatAmI = new BigUint64Array()
        }
    },
    Map:               {
        'onStart': function () {
            this.whatAmI = new Map()
        }
    },
    Set:               {
        'onStart': function () {
            this.whatAmI = new Set()
        }
    },
    WeakMap:           {
        'onStart': function () {
            this.whatAmI = new WeakMap()
        }
    },
    WeakSet:           {
        'onStart': function () {
            this.whatAmI = new WeakSet()
        }
    },
    ArrayBuffer:       {
        'onStart': function () {
            this.whatAmI = new ArrayBuffer()
        }
    },
    SharedArrayBuffer: {
        'onStart': function () {
            this.whatAmI = new SharedArrayBuffer()
        }
    },
    Atomics:           {
        'onStart': function () {
            this.whatAmI = new Atomics()
        }
    },
    DataView:          {
        'onStart': function () {
            this.whatAmI = new DataView()
        }
    },
    JSON:              {
        'onStart': function () {
            this.whatAmI = new JSON()
        }
    },
    Promise:           {
        'onStart': function () {
            this.whatAmI = new Promise()
        }
    },
    Generator:         {
        'onStart': function () {
            this.whatAmI = new Generator()
        }
    },
    GeneratorFunction: {
        'onStart': function () {
            this.whatAmI = new GeneratorFunction()
        }
    },
    AsyncFunction:     {
        'onStart': function () {
            this.whatAmI = new AsyncFunction()
        }
    },
    Reflect:           {
        'onStart': function () {
            this.whatAmI = new Reflect()
        }
    },
    Proxy:             {
        'onStart': function () {
            this.whatAmI = new Proxy()
        }
    },
    Intl:              {
        Intl:               {
            'onStart': function () {
                this.whatAmI = new Intl()
            }
        },
        Collator:           {
            'onStart': function () {
                this.whatAmI = new Intl.Collator()
            }
        },
        DateTimeFormat:     {
            'onStart': function () {
                this.whatAmI = new Intl.DateTimeFormat()
            }
        },
        ListFormat:         {
            'onStart': function () {
                this.whatAmI = new Intl.ListFormat()
            }
        },
        NumberFormat:       {
            'onStart': function () {
                this.whatAmI = new Intl.NumberFormat()
            }
        },
        PluralRules:        {
            'onStart': function () {
                this.whatAmI = new Intl.PluralRules()
            }
        },
        RelativeTimeFormat: {
            'onStart': function () {
                this.whatAmI = new Intl.RelativeTimeFormat()
            }
        },
        Locale:             {
            'onStart': function () {
                this.whatAmI = new Intl.Locale()
            }
        }
    },
    WebAssembly:       {

        WebAssembly:  {
            'onStart': function () {
                this.whatAmI = new WebAssembly()
            }
        },
        Module:       {
            'onStart': function () {
                this.whatAmI = new WebAssembly.Module()
            }
        },
        Instance:     {
            'onStart': function () {
                this.whatAmI = new WebAssembly.Instance()
            }
        },
        Memory:       {
            'onStart': function () {
                this.whatAmI = new WebAssembly.Memory()
            }
        },
        Table:        {
            'onStart': function () {
                this.whatAmI = new WebAssembly.Table()
            }
        },
        CompileError: {
            'onStart': function () {
                this.whatAmI = new WebAssembly.CompileError()
            }
        },
        LinkError:    {
            'onStart': function () {
                this.whatAmI = new WebAssembly.LinkError()
            }
        },
        RuntimeError: {
            'onStart': function () {
                this.whatAmI = new WebAssembly.RuntimeError()
            }
        }
    }
}
