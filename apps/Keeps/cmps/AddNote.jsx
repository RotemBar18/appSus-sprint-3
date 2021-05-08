
export function AddNote({ onAddNote, newNoteType, onSubmit, handleChange }) {

    return (
        <section className='new-note-input'>
            <div className='note-types'>
                <img className='text-btn' onClick={() => { onSubmit('NoteText') }} src="./assets/img/text.png" alt="" />
                <img className='img-btn' onClick={() => { onSubmit('NoteImg') }} src="./assets/img/img.png" alt="" />
                <img className='list-btn' onClick={() => { onSubmit('NoteTodos') }} src="./assets/img/list.png" alt="" />
                <img className='video-btn' onClick={() => { onSubmit('NoteVideo') }} src="./assets/img/video.png" alt="" />
            </div>
            <div className='add-note'>
            {DynamicCmp(newNoteType, handleChange)}
                <img className='add-btn' onClick={() => { onAddNote() }} src="./assets/img/add.png" alt="" />
            </div>

        </section>
    )
}

const DynamicCmp = (newNoteType, handleChange) => {
    switch (newNoteType) {
        case 'NoteText':
            return (
                <input className='new-note' type="text" name="" id="" placeholder='Enter new text...' onChange={handleChange} />
            )
        case 'NoteImg':
            return (
                <input className='new-note' type="text" name="" id="" placeholder='Enter image URL...' onChange={handleChange} />
            )
        case 'NoteTodos':
            return (
                <input className='new-note' type="text" name="" id="" placeholder='Enter comma seperated list...' onChange={handleChange} />
            )
        case 'NoteVideo':
            return (
                <input className='new-note' type="text" name="" id="" placeholder='Enter YouTube video ID...' onChange={handleChange} />
            )
        default:
            return console.log('your note type is not correct')
    }
}