import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodo } from './NoteTodo.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import { NoteEmail } from './NoteEmail.jsx'

export function DynamicNoteCmp({ note, onToggleTodo, openEditor }) {

    const renderCmp = (note, onToggleTodo, openEditor) => {
        switch (note.type) {
            case 'NoteText':
                return <NoteText note={note} openEditor={openEditor} />
            case 'NoteImg':
                return <NoteImg note={note} openEditor={openEditor} />
            case 'NoteTodos':
                return <NoteTodo note={note} onToggleTodo={onToggleTodo} openEditor={openEditor} />
            case 'NoteVideo':
                return <NoteVideo note={note} openEditor={openEditor} />
            case 'NoteEmail':
                return <NoteEmail note={note} openEditor={openEditor} />

            default:
                return console.log('error Note Type is undefined or something else...')
        }
    }

    return (
        renderCmp(note, onToggleTodo, openEditor)
    )
}
