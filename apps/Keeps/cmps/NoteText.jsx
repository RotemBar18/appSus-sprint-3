
export function NoteText({ note, openEditor }) {
    console.log(note)
    return (
        <div style={{ backgroundColor: note.style.bgc }} id={note.id} className={`note ${note.type}`}>
            <p>{note.info.txt}</p>
            <img className='edit-btn' onClick={() => { openEditor(note) }} src="./assets/img/edit.png" alt="" />
        </div>)

}
