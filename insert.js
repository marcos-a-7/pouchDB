const PouchDB = require('pouchdb')

const localDB = new PouchDB('miBaseLocal')


localDB.put({ '_id': '123', 'name': 'mariano' })
localDB.put({ '_id': '455', 'name': 'marcos' })
localDB.put({ '_id': '66', 'name': 'matias' })
localDB.put({ '_id': '98', 'name': 'jorge' })
localDB.put({ '_id': '999', 'name': 'martin' })
localDB.put({ '_id': '666', 'name': 'satan' })
localDB.put({ '_id': '33', 'name': 'max' })