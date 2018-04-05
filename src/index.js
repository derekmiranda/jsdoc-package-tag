const path = require('path')
const findNpmPackageName = require('./find-npm-package-name')
const changeInlineTags = require('./change-inline-tags')

exports.defineTags = function jsdocPackageTag(dictionary) {
	dictionary.defineTag('npmpackage', {
		mustNotHaveDescription: false,
		mustNotHaveValue: false,
		// for block tags
		onTagged: function(doclet, tag) {
			const pkgName = findNpmPackageName(doclet.meta.path)
			doclet.npmpackage = pkgName
		}
	})
}

exports.handlers = {
	// for inline tags
	newDoclet: function({ doclet }) {
		const newDescription = changeInlineTags(doclet.description, doclet.meta.path)
		doclet.description = newDescription
	}
}
