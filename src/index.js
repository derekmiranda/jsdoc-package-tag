const path = require('path')
const promisify = require('bluebird').promisify
const findNpmPackageDir = require('./find-npm-package-dir')

exports.defineTags = function jsdocPackageTag(dictionary) {
	dictionary.defineTag('package', {
		onTagged: function(doclet, tag) {}
	})
}
