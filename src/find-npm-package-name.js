const path = require('path')
const fs = require('fs')

// Have to work synchronously since plugin event handlers don't support async execution

function findNameInPkgJson(pkgJson) {
	const jsonStr = fs.readFileSync(pkgJson, 'utf8')
	const jsonData = JSON.parse(jsonStr)
	return jsonData.name
}

const pkgNameCache = {}
function getNpmPackageName(dirPath) {
	if (pkgNameCache[dirPath] === undefined) {
		try {
			const pkgJson = path.resolve(dirPath, 'package.json')
			const pkgName = findNameInPkgJson(pkgJson)
			pkgNameCache[dirPath] = pkgName || null
		} catch (err) {
			// no package.json found in directory
			if (err.code === 'ENOENT') {
				pkgNameCache[dirPath] = null
			} else {
				throw err
			}
		}
	}
	return pkgNameCache[dirPath]
}

function findNpmPackageName(filePath) {
	// stop at root
	if (filePath === '/') {
		return null
	}
	const containingDir = path.dirname(filePath)
	const pkgName = getNpmPackageName(containingDir)
	if (pkgName) {
		return pkgName
	}
	return findNpmPackageName(containingDir)
}

module.exports = findNpmPackageName
