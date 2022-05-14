const yargs = require('yargs')
const notes = require('./notes.js') 

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        'title': {
            describe: 'Note title',
            demandOption : true,
            type: 'string'
        },
        'body': {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        'title': {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
    
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler(){
        notes.listNotes()
    }
    
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder:{
        'title': {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
    
})

yargs.parse()