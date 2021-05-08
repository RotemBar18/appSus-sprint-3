
export function NoteVideo({ note, openEditor}) {

    return (
        <div style={{ backgroundColor: note.style.bgc }} id={note.id} className={`note ${note.type}`}>
            <video src={note.info.src} controls></video>
            <img className='edit-btn' onClick={() => { openEditor(note) }} src="../../../assets/img/edit.png" alt="" />

        </div>)
}
