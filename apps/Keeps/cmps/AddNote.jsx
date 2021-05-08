
export function AddNote({ onAddNote, newNoteType, onSubmit, handleChange }) {

    return (
        <section className='new-note-input'>
            {DynamicCmp(newNoteType, handleChange)}
            <div className='note-types'>
                <button onClick={() => { onSubmit('NoteText') }}>Text</button>
                <button onClick={() => { onSubmit('NoteImg') }}>Img</button>
                <button onClick={() => { onSubmit('NoteTodos') }}>List</button>
                <button onClick={() => { onSubmit('NoteVideo') }}>Video</button>
                <button onClick={() => { onAddNote() }}>+</button>

            </div>
        </section>
    )
}

const DynamicCmp = (newNoteType, handleChange) => {
    switch (newNoteType) {
        case 'NoteText':
            return (
                <input type="text" name="" id="" placeholder='Enter new text...' onChange={handleChange} />
            )
        case 'NoteImg':
            return (
                <input type="text" name="" id="" placeholder='Enter image URL...' onChange={handleChange} />
            )
        case 'NoteTodos':
            return (
                <input type="text" name="" id="" placeholder='Enter comma seperated list...' onChange={handleChange} />
            )
        case 'NoteVideo':
            return (
                <input type="text" name="" id="" placeholder='Enter video SRC...' onChange={handleChange} />
            )
        default:
            return //...some default error view
    }
}