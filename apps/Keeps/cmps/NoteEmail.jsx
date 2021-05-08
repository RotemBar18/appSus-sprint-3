
export function NoteEmail({ note, openEditor }) {
    const { emailBody, emailTitle, sendFrom, sendTo } = note.info

    return (
        <div style={{ backgroundColor: note.style.bgc }} id={note.id} className={`note ${note.type}`}>
            <h1>{emailTitle}</h1>
            <p>{emailBody}</p>
            <div className='from-to-details'>
            <span>From: {sendFrom}</span>
            <span>To: {sendTo}</span>
            </div>
            <img className='edit-btn' onClick={() => { openEditor(note) }} src="./assets/img/edit.png" alt="" />

        </div>)
}