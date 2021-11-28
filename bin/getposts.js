#!/usr/bin/env node

// requires
const argv = require('minimist')(process.argv.slice(2))
const fs = require('fs')
const path = require('path')
const $ = require('child_process').execSync

// data
globalThis.data = {
  api: 'https://dev.to/api/articles/latest',
  dataDir: path.join(__dirname, '..'),
  filename: 'posts.json',
  perPage: 1000,
  user: 'melvincarvalho'
}

// init
data.api = argv.api || data.api
data.dataDir = argv.dataDir || data.dataDir
data.filename = argv.filename || data.filename
data.perPage = argv.perPage || data.perPage
data.user = argv._[0] || data.user
console.log('data', data)

// main
let postsUri = `${data.api}`
postsUri += `?per_page=${data.perPage}`
postsUri += `&username=${data.user}`
const cmd = `curl '${postsUri}'`
console.log('cmd', cmd)
const json = JSON.parse($(cmd).toString())

// output
const output = JSON.stringify(json, null, 2)
const outFile = path.join(data.dataDir, data.filename)
console.log('output', output)
fs.writeFileSync(outFile, output)
