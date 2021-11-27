#!/usr/bin/env node

// requires
const argv = require('minimist')(process.argv.slice(2))
const $ = require('child_process').execSync
const fs = require('fs')

// data
globalThis.data = {
  post: null,
  api: 'https://dev.to/api/articles/',
  datadir: './posts'
}

// init
data.post = argv._[0] || data.post
data.api = argv.api || data.api
data.datadir = argv.datadir || data.datadir
console.log('data', data)

// main
const posturi = `${data.api}${data.post}`
const cmd = `curl ${posturi}`
console.log('cmd', cmd)

const json = JSON.parse($(cmd).toString())
const output = JSON.stringify(json, null, 2)
const outfile = `${data.datadir}/${data.post}.json`
console.log('output', output)

fs.writeFileSync(outfile, output)

