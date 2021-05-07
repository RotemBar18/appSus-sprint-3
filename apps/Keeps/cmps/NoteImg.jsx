
export function NoteImg({ note, openEditor }) {

    return (
        <div style={{ backgroundColor: note.style.bgc }} id={note.id} className={`note ${note.type}`}>
            <img className='preview-img' src={`${note.info.url}`} alt="" />
            <p>{note.info.title}</p>
            <img className='edit-btn' onClick={() => { openEditor(note) }} src="../../../assets/img/edit.png" alt="" />

        </div>)
}
