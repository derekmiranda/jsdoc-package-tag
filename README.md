# JsDoc @package Tag

JsDoc plugin to enable @package tags which display the name of a module's corresponding NPM package

## Installation

Install with `npm install --save-dev jsdoc-package-tag`

Add this to your JsDoc configuration by placing it in your array of plugins:

```js
{
	...,
	"plugins": [
		...,
		"jsdoc-package-tag",
		...,
	],
	...
}
```
TODO: verify plugin resolves

## Usage

Simply add the `@package` tag to your JsDoc comment to access a module's package name

```js
/**
 * @module frenchColors
 * @package
 */
```

If the `frenchColors` module is part of the `international-colors` module, `@package` will be output as `international-colors`.