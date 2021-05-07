import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js'

export const noteService = {
    query,
    createNote,
    deleteNote
}

const KEY = 'notes';
var gNotes;
_createNotes();



function query() {
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

// function removeReview(book, reviewId) {
//     console.log('ReviewId from service', reviewId)
//     _getReviewIdxById(reviewId, book)
//         .then((reviewIdx) => {
//             console.log('reviewIdx', reviewIdx)
//             book.reviews.splice(reviewIdx, 1)
//         })

//     return Promise.resolve(book)
// }

// function _getReviewIdxById(reviewId, book) {
//     var reviewIdx = book.reviews.findIndex((review) => {
//         return reviewId === review.id
//     })
//     return Promise.resolve(reviewIdx)
// }

// function getBookById(bookId) {
//     var book = gBooks.find((book) => {
//         return bookId === book.id
//     })
//     return Promise.resolve(book)
// }

// function updateBook(bookId, newSpeed) {
//     var book = gBooks.find(function (book) {
//         return book.id === bookId;
//     })
//     book.speed = newSpeed;
//     _saveBooksToStorage();
//     return Promise.resolve()
// }

// function saveReview(book, review) {
//     console.log('Review', review)
//     if (!book.reviews) book.reviews = []
//     review['id'] = utilService.makeId()
//     book.reviews.push(review)
//     console.log('book', book)
//     _saveBooksToStorage();

//     return Promise.resolve(book)
// }

// function searchBooks(searchBy) {
//     gSearchedBooks = BooksApiService.getBooks(searchBy)
//         .then(books => {
//             return books.items
//         })


//     return Promise.resolve(gSearchedBooks)
// }


function createNote(noteType, noteContent) {
    console.log('noteType', noteType)
    console.log('noteContent', noteContent)
    let info;
    let todos = noteContent.split(',')
    todos = todos.map(todo => {
        return {
            txt: todo,
            doneAt: null
        }
    })
    console.log('todos', todos)
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


            break
    }

    const note = {
        id: utilService.makeId(),
        type: noteType,
        isPinned: false,
        info,
    }
    console.log('note', note.info.todos)
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
                type: "NoteText",
                isPinned: true,
                info: {
                    txt: "Fullstack!"
                }
            },
            {
                id: utilService.makeId(),
                type: "NoteImg",
                info: {
                    url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3Vuc2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=60",
                    title: "Me playing Mi"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                id: utilService.makeId(),
                type: "NoteTodos",
                info: {
                    label: "How was it:",
                    todos: [
                        { txt: "Do that", doneAt: null },
                        { txt: "Do this", doneAt: 187111111 }
                    ]
                }
            }
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
