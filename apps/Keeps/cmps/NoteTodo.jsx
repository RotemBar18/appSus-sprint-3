import { utilService } from '../../../services/util-service.js'

export function NoteTodo({ note, openEditor, onToggleTodo }) {

    return (
        <div style={{ backgroundColor: note.style.bgc }} id={note.id} className={`note ${note.type}`}>
            <p>{note.info.label}</p>
            <ul>
                {note.info.todos.map(todo => {
                    return <li className={`todo ${(todo.doneAt ? 'done' : '')}`} key={utilService.makeId()} onClick={() => onToggleTodo(todo)}>{todo.txt}</li>
                })}
            </ul>
            <img className='edit-btn' onClick={() => { openEditor(note) }} src="../../../assets/img/edit.png" alt="" />

        </div>)
}
