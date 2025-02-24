<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dnanasum

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the sum of absolute values ([_L1_ norm][l1norm]) of double-precision floating-point strided array elements, ignoring `NaN` values.

<section class="intro">

The [_L1_ norm][l1norm] is defined as

<!-- <equation class="equation" label="eq:l1norm" align="center" raw="\|\mathbf{x}\|_1 = \sum_{i=0}^{n-1} \vert x_i \vert" alt="L1 norm definition."> -->

```math
\|\mathbf{x}\|_1 = \sum_{i=0}^{n-1} \vert x_i \vert
```

<!-- <div class="equation" align="center" data-raw-text="\|\mathbf{x}\|_1 = \sum_{i=0}^{n-1} \vert x_i \vert" data-equation="eq:l1norm">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@37e8b551d14d17010e51f87e3e171e62c090fa5f/lib/node_modules/@stdlib/blas/ext/base/dnanasum/docs/img/equation_l1norm.svg" alt="L1 norm definition.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import dnanasum from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dnanasum@esm/index.mjs';
```

#### dnanasum( N, x, strideX )

Computes the sum of absolute values ([_L1_ norm][l1norm]) of double-precision floating-point strided array elements, ignoring `NaN` values.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = dnanasum( x.length, x, 1 );
// returns 5.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the sum of absolute values ([_L1_ norm][l1norm]) for every other element:

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 1.0, 2.0, NaN, -7.0, NaN, 3.0, 4.0, 2.0 ] );

var v = dnanasum( 4, x, 2 );
// returns 5.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x0 = new Float64Array( [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = dnanasum( 4, x1, 2 );
// returns 9.0
```

#### dnanasum.ndarray( N, x, strideX, offsetX )

Computes the sum of absolute values ([_L1_ norm][l1norm]) of double-precision floating-point strided array elements, ignoring `NaN` values and using alternative indexing semantics.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = dnanasum.ndarray( 4, x, 1, 0 );
// returns 5.0
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the sum of absolute values ([_L1_ norm][l1norm]) for every other value in the strided array starting from the second value:

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ] );

var v = dnanasum.ndarray( 4, x, 2, 1 );
// returns 9.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import bernoulli from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-bernoulli@esm/index.mjs';
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs';
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import dnanasum from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dnanasum@esm/index.mjs';

function rand() {
    if ( bernoulli( 0.5 ) < 1 ) {
        return discreteUniform( 0, 100 );
    }
    return NaN;
}

var x = filledarrayBy( 10, 'float64', rand );
console.log( x );

var v = dnanasum( x.length, x, 1 );
console.log( v );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas-base/dasum`][@stdlib/blas/base/dasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (L1 norm).</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/dasumpw`][@stdlib/blas/ext/base/dasumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values (L1 norm) of double-precision floating-point strided array elements using pairwise summation.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-dnanasum.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-dnanasum

[test-image]: https://github.com/stdlib-js/blas-ext-base-dnanasum/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-dnanasum/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-dnanasum/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-dnanasum?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-dnanasum.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-dnanasum/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-dnanasum/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-dnanasum/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-dnanasum/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-dnanasum/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-dnanasum/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-dnanasum/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-dnanasum/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-dnanasum/main/LICENSE

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64/tree/esm

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[l1norm]: https://en.wikipedia.org/wiki/Norm_%28mathematics%29

<!-- <related-links> -->

[@stdlib/blas/base/dasum]: https://github.com/stdlib-js/blas-base-dasum/tree/esm

[@stdlib/blas/ext/base/dasumpw]: https://github.com/stdlib-js/blas-ext-base-dasumpw/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
