/**
 * This file builds the interfaces from the JSON schema in the swagger definition.
 */

const {readFile: readFileAsync, writeFile: writeFileAsync} = require('fs')
const {promisify} = require('util')
const readFile = promisify(readFileAsync)
const writeFile = promisify(writeFileAsync)
const path = require('path')

const srcFile = process.argv[process.argv.length - 2]
const targetDir = process.argv[process.argv.length - 1]

readFile(srcFile, 'utf-8')
  .then(JSON.parse)
  .then(api => Promise
    .all(
      Object.keys(api.components.schemas).map(schemaName => {
        const schema = api.components.schemas[schemaName]
        const {title} = schema
        return writeFile(path.join(targetDir, `${title}.json`), JSON.stringify(fixSchemaReferences(schema), null, 2))
      }))
    .then(() => {
      // Write index files
      const indexJs = '"use strict";\n' +
        'Object.defineProperty(exports, "__esModule", { value: true });\n' +
        'exports.schemas = [\n' +
        Object.keys(api.components.schemas).map(schemaName => `require('./${schemaName}.json')`).join(',\n') +
        '\n];'
      return writeFile('./schemas/index.js', indexJs)
    })
  )

const fixSchemaReferences = (object, key) => {
  if (object === Object(object)) {
    const keys = Object.keys(object)
    return keys.reduce((object, key) => {
      object[key] = fixSchemaReferences(object[key], key)
      return object
    }, object)
  }
  if (key === '$ref') {
    return object.replace('#/components/schemas/', './').replace(/$/, '.json')
  }
  return object
}
