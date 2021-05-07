import { NotePreview } from './NotePreview.jsx'

export function NotesList({ notes, onDeleteNote, onToggleTodo, pinNote, renderEdited, copyNote }) {
    return (
        <div className="note-list">
            {notes.map(note => {
                return (<NotePreview
                    renderEdited={renderEdited}
                    copyNote={copyNote}
                    onDeleteNote={onDeleteNote}
                    pinNote={pinNote}
                    onToggleTodo={onToggleTodo}
                    note={note}
                    key={note.id}/>)
            })
            }
        </div>
    )
}