import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js'

export const noteService = {
    query,
    createNote,
    deleteNote,
    updateNote,
    pinNote,
    copyNote,
    toggleTodo,
    createEmailNote
}

const KEY = 'notes';
var gNotes;
_createNotes();



function query(searchBy) {
    if (searchBy) {
        const filteredNotes = gNotes.filter(note => {
            switch (note.type) {
                case 'NoteText':
                    return note.info.txt.includes(searchBy)
                case 'NoteImg':
                    return note.info.title.includes(searchBy)
                case 'NoteTodos':
                    return note.info.label.includes(searchBy)
            }
        })
        return Promise.resolve(filteredNotes)
    }
    return Promise.resolve(gNotes)
}

function deleteNote(noteId) {
    var noteIdx = gNotes.findIndex((note) => {
        return noteId === note.id
    })
    gNotes.splice(noteIdx, 1)
    _saveNotesToStorage();
    return Promise.resolve(gNotes)
}

function toggleTodo(todo) {
    todo.doneAt = (todo.doneAt) ? null : Date.now
    return Promise.resolve()
}

function updateNote(currNoteId, changes) {
    const currNote = gNotes.find(note => note.id === currNoteId)
    console.log('currNote', currNote)
    currNote.style.bgc = (changes.bgc) ? changes.bgc : currNote.style.bgc
    currNote.info.url = (changes.url) ? changes.url : currNote.info.url
    currNote.info.videoId = (changes.videoId) ? changes.videoId : currNote.info.videoId
    currNote.info.emailTitle = (changes.emailTitle) ? changes.emailTitle : currNote.info.emailTitle
    currNote.info.emailBody = (changes.emailBody) ? changes.emailBody : currNote.info.emailBody
    switch (currNote.type) {
        case 'NoteText':
            if (!changes.txt) break
            currNote.info.txt = changes.txt
            break
        case 'NoteImg':
            if (!changes.title) break
            currNote.info.title = changes.title
            if (changes.url)
                currNote.info.url = changes.url
            break
        case 'NoteTodos':
            if (changes.label) currNote.info.label = changes.label
            if (!changes.todoTxt) break
            currNote.info.todos = changes.todoTxt
            break
    }

    // var noteIdx = gNotes.findIndex((note) => {
    //     return note.id === currNote.id;
    // })
    // gNotes[noteIdx] = 
    // console.log('gNotes', gNotes)
    // gNotes.splice(noteIdx, 1, currNote)

    _saveNotesToStorage();
    return Promise.resolve(gNotes)
}


function pinNote(note) {
    const noteId = note.id
    var noteIdx = gNotes.findIndex((note) => {
        return note.id === noteId;
    })
    gNotes.splice(noteIdx, 1)
    gNotes.unshift(note)
    _saveNotesToStorage();
    return Promise.resolve(gNotes)
}

function copyNote(note) {
    let newNote = { ...note }
    newNote.id = utilService.makeId()
    gNotes = [...gNotes, newNote];
    _saveNotesToStorage();
    return Promise.resolve(gNotes)

}
function createEmailNote(email) {
    console.log('email', email)
    createNote('NoteEmail', email)

}

function createNote(noteType, noteContent) {
    console.log('noteContent', noteContent)
    let info;
    if (noteType === 'NoteTodos') {
        let todos = noteContent.split(',')
        todos = todos.map(todo => {
            return {
                txt: todo,
                doneAt: null
            }
        })
    }
    switch (noteType) {
        case 'NoteText':
            info = { txt: noteContent };
            break
        case 'NoteImg':
            info = {
                url: noteContent,
                title: "new Note Img"
            }
            break
        case 'NoteTodos':
            info = {
                label: "new Note List",
                todos
            }
        case 'NoteVideo':
            info = {
                videoId: noteContent
            }
            break
        case 'NoteEmail':
            info = {
                emailTitle: noteContent.title,
                emailBody: noteContent.body,
                sendTo: noteContent.sendTo,
                sendFrom: noteContent.sendfrom
            }
            break
    }


    const note = {
        id: utilService.makeId(),
        type: noteType,
        isPinned: false,
        info,
        style: {
            bgc: "#ffffff"
        }

    }

    console.log('note', note)
    gNotes.push(note)
    _saveNotesToStorage();
    return Promise.resolve(gNotes)
}



function _createNotes() {
    var notes = storageService.loadFromStorage(KEY)
    if (!notes || !notes.length) {
        notes = [
            {
                id: utilService.makeId(),
                type: "NoteVideo",
                info: {
                    videoId: "yXrlhebkpIQ",
                },
                style: {
                    bgc: "#d48ef7"
                }
            },
            {
                id: utilService.makeId(),
                type: "NoteText",
                isPinned: true,
                info: {
                    txt: "DONT FORGET WEDNESDAY 9PM MEETING"
                },
                style: {
                    bgc: "#D75E45"
                }
            },
            {
                id: utilService.makeId(),
                type: "NoteTodos",
                info: {
                    label: "Work progress ",
                    todos: [
                        { txt: "work on css", doneAt: null },
                        { txt: "build components for different type of notes", doneAt: 187111111 },
                        { txt: "DONT FORGET CRUD!", doneAt: null }
                    ]
                },
                style: {
                    bgc: "#84fdf8"
                }
            },
            {
                id: utilService.makeId(),
                type: "NoteImg",
                info: {
                    url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3Vuc2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=60",
                    title: "North America 2018"
                },
                style: {
                    bgc: "#fc7"
                }
            },
            {
                id: utilService.makeId(),
                type: "NoteTodos",
                info: {
                    label: "shopping list:",
                    todos: [
                        { txt: "Tomatos", doneAt: null },
                        { txt: "Flour", doneAt: null },
                        { txt: "Milk", doneAt: null },
                        { txt: "Eggs", doneAt: null },
                        { txt: "Burgers", doneAt: null },
                        { txt: "Cooking oil", doneAt: null },
                    ]
                },
                style: {
                    bgc: "#75ff6c"
                }
            },
            {
                id: utilService.makeId(),
                type: "NoteText",
                isPinned: true,
                info: {
                    txt: "What’s the best thing about Switzerland? I don’t know, but the flag is a big plus."
                },
                style: {
                    bgc: "#fc7"
                }
            },
            {
                id: utilService.makeId(),
                type: "NoteVideo",
                info: {
                    videoId: "NUYvbT6vTPs",
                },
                style: {
                    bgc: "#f8f87c"
                }
            },
            {
                id: utilService.makeId(),
                type: "NoteImg",
                info: {
                    url: "https://images-na.ssl-images-amazon.com/images/I/A1zx8Mw5itL._AC_SL1500_.jpg",
                    title: "Starry Night"
                },
                style: {
                    bgc: "#7091ef"
                }
            },

        ];
    }
    gNotes = notes;
    _saveNotesToStorage();
    return Promise.resolve()
}

function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes)
    return Promise.resolve()
}


