const PouchDB = require('pouchdb')

const localDB = new PouchDB('miBaseLocal')

const remoteDB = new PouchDB('http://admin:couchdb@127.0.0.1:5984/softwarelibre/')

localDB.sync(remoteDB, {
    live: true, // mantiene conexión abierta
    retry: true // si se cae la conexión vuelve a intentar conectarse
   }).on('change', function (change) {
    console.log('data change', change)
   }).on('error', function (err) {
    console.log('sync error', err)
   })