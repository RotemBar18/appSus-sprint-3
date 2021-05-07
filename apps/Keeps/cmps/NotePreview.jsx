
export function NotePreview({ note, onDeleteNote, openEditor }) {

    return (
        <article className="note-container" onClick={() => openEditor(note)}>
            {DynamicCmp(note, onDeleteNote)}
        </article>
    )
}

const DynamicCmp = (note, onDeleteNote) => {
    console.log(note);
    switch (note.type) {
        case 'NoteText':
            return (
                <div id={note.id} className={`note ${note.type}`}>
                    <p>{note.info.txt}</p>
                    <button>A</button>
                    <button className='remove-btn' onClick={() => { onDeleteNote(note.id) }}>x</button>

                </div>)
        case 'NoteImg':
            return (
                <div id={note.id} className={`note ${note.type}`}>
                    <img className='preview-img' src={`${note.info.url}`} alt="" />
                    <p>{note.info.title}</p>
                    <button className='remove-btn' onClick={() => { onDeleteNote(note.id) }}>x</button>

                </div>)
        case 'NoteTodos':
            return (
                <div id={note.id} className={`note ${note.type}`}>
                    <p>{note.info.label}</p>
                    <ul>
                        {note.info.todos.map(todo => {
                            return <li key={todo.txt}>{todo.txt}</li>
                        })}
                    </ul>
                    <button className='remove-btn' onClick={() => { onDeleteNote(note.id) }}>x</button>
                </div>)
        default:
            return //...some default error view
    }
}