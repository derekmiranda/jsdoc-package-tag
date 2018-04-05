# JsDoc @npmpackage Tag

JsDoc plugin to enable @npmpackage tags which display the name of a module's corresponding NPM package

## Installation

Install with `npm install --save-dev jsdoc-npmpackage-tag`

Add this to your JsDoc configuration by placing it in your array of plugins:

```js
{
	...,
	"plugins": [
		...,
		"node_modules/jsdoc-npmpackage-tag",
		...,
	],
	...
}
```

## Usage

Simply add the `@npmpackage` tag to your JsDoc comment to access a module's package name. DON'T add any values/parameters to this when inlined.

```js
/**
 * @module frenchColors
 * @npmpackage
 * @description
 * 
 * This module is in this package: {@npmpackage}
 */
```

If the `frenchColors` module is part of the `international-colors` module, `@npmpackage` will be output as `international-colors`.