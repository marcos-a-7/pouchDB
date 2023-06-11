const PouchDB = require('pouchdb')

const localDB = new PouchDB('miBaseLocal')

const remoteDB = new PouchDB('http://admin:couchdb@127.0.0.1:5984/softwarelibre/')

//localDB.put({ '_id': '123', 'name': 'mariano' })

//localDB.get('123').then((doc) => {console.log(doc)})

//localDB.put({ '_id': '455', 'name': 'marcos' })
//localDB.put({ '_id': '66', 'name': 'matias' })
//localDB.put({ '_id': '98', 'name': 'jorge' })

remoteDB.allDocs({
    include_docs: true
}).then((docs) => {
    //console.log(docs)
    docs.rows.forEach((d) => console.log(d.doc))
})

localDB.sync(remoteDB, {
    live: true, // mantiene conexión abierta
    retry: true // si se cae la conexión vuelve a intentar conectarse
   }).on('change', function (change) {
    console.log('data change', change)
   }).on('error', function (err) {
    console.log('sync error', err)
   })