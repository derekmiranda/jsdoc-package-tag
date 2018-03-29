const findNpmPackageName = require('./find-npm-package-name')

function changeInlineTags(desc, filePath) {
	const npmPkgName = findNpmPackageName(filePath)
	return desc && desc.replace(/{\s*@package\s*}/g, npmPkgName)
}

module.exports = changeInlineTags
