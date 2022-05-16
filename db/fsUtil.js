const fs = require('fs');
// universal unique indentifier 
const uuidv1 = require('uuid/v1');
const util = require('util');

const readTheFile = util.promisify(fs.readFile);
const writeTheFile = util.promisify(fs.writeFile);

class storeNote {
    getNote() {
        return readTheFile('db/db.json', 'utf8').then((note) => {
            return JSON.parse(note)
        })
    }
    addNote(note) {
        const {title, text} = note;
         
        if (!title || !text) {
            throw new error('Please enter title and text as directed');
        }

        const newNote = {title, text, id: uuidv1() };
        this.getNote().then((note) => {
          note.push(newNote);

        });
    }
}

module.exports = new storeNote;