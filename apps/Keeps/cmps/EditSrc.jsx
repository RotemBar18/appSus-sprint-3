
export function EditSrc({ note, handleChange }) {

    return (
        <div className='dynamic-edit-container'>
            <input name='src' className='src-input' autoComplete='off' onChange={handleChange} type="text" placeholder={note.info.src} />
        </div>
    )
}
