#!/usr/bin/env node

// requires
const argv = require('minimist')(process.argv.slice(2))
const fs = require('fs')
const path = require('path')
const $ = require('child_process').execSync

// data
globalThis.data = {
  user: 'melvincarvalho',
  api: 'https://dev.to/api/articles/latest',
  datadir: path.join(__dirname, '..'),
  perpage: 1000
}

// init
data.user = argv._[0] || data.user
data.api = argv.api || data.api
data.datadir = argv.datadir || data.datadir
data.perpage = argv.perpage || data.perpage
console.log('data', data)

// main
let postsuri = `${data.api}`
postsuri += `?per_page=${data.perpage}`
postsuri += `&username=${data.user}`
const cmd = `curl '${postsuri}'`
console.log('cmd', cmd)
const json = JSON.parse($(cmd).toString())

// output
const output = JSON.stringify(json, null, 2)
const outfile = `${data.datadir}/posts.json`
console.log('output', output)
fs.writeFileSync(outfile, output)
