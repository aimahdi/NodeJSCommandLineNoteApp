const chalk = require('chalk')
const fs = require('fs')

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()

        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse("Note title taken!"))
    }

}

const readNote = (title)=>{
    const notes = loadNotes()

    const note = notes.find((note)=> note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('Notes not found'))
    }
    
}

const listNotes = ()=>{
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note)=>console.log(note.title))
}

const removeNote = (title) => {
    const notes = loadNotes()

    const newNotes = notes.filter((note) => note.title !== title)

    if (newNotes.length < notes.length) {
        saveNotes(newNotes)
        console.log(chalk.green.inverse('Note is removed'))


    } else {
        console.log(chalk.red.inverse('No note is removed'))
    }


}

module.exports = {
    readNote: readNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}