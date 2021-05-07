import { utilService } from '../../../services/util-service.js'

export function NoteEditor({ closeEditor, note }) {
    return (
        <div className="note-editor" onClick={closeEditor}>
            {console.log(note)}
            {note.type === "NoteImg" && <img src={`${note.info.url}`} alt="" />}
            {note.type === "NoteImg" && <h1>{`${note.info.title}`}</h1>}
            {note.type === "NoteText" && <h1>{`${note.info.txt}`}</h1>}
            {note.type === "NoteTodos" && <h1>{`${note.info.label}`}</h1>}
            {note.type === "NoteTodos" && <ul>
                {note.info.todos.map(todo => {
                    return <li key={utilService.makeId()}>{todo.txt}</li>
                })}
            </ul>}
        </div>
    )
}