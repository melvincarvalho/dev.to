#!/usr/bin/env node

// requires
const argv = require('minimist')(process.argv.slice(2))
const $ = require('child_process').execSync
const fs = require('fs')

// data
globalThis.data = {
  user: 'melvincarvalho',
  api: 'https://dev.to/api/articles/',
  datadir: '.'
}

// init
data.user = argv._[0] || data.user
data.api = argv.api || data.api
data.datadir = argv.datadir || data.datadir
console.log('data', data)

// main
const useruri = `${data.api}?username=${data.user}`
const cmd = `curl ${useruri}`
console.log('cmd', cmd)

const json = JSON.parse($(cmd).toString())
console.log('json', json)

fs.writeFileSync(`${data.datadir}/posts.json`, JSON.stringify(json, null, 2))

