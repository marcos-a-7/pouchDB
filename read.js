const PouchDB = require('pouchdb')

const localDB = new PouchDB('miBaseLocal')

const remoteDB = new PouchDB('http://admin:couchdb@127.0.0.1:5984/softwarelibre/')



//local
console.log("Local:\n--------------")
localDB.allDocs({
    include_docs: true
}).then((docs) => {
    //console.log(docs)
    docs.rows.forEach((d) => console.log(d.doc))
})