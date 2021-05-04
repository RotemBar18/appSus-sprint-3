import { NotePreview } from './NotePreview.jsx'

export function NotesList({ notes, onDeleteNote, openEditor }) {
    return (
        <div className="note-list">
            {notes.map(note => <NotePreview onDeleteNote={onDeleteNote} openEditor={openEditor} note={note} key={note.id} />)}
        </div>
    )
}