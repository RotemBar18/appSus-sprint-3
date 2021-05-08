
export function NoteVideo({ note, openEditor }) {

    return (
        <div style={{ backgroundColor: note.style.bgc }} id={note.id} className={`note ${note.type}`}>
            <iframe width="85%" src={`https://www.youtube.com/embed/${note.info.videoId}?controls=0`} frameBorder="0">
            </iframe>
            <img className='edit-btn' onClick={() => { openEditor(note) }} src="../../../assets/img/edit.png" alt="" />

        </div>)
}