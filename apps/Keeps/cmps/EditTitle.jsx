
export function EditTitle({ note, handleChange }) {

    return (
        <div className='dynamic-edit-container'>
            <input name='url' className='url-input' autoComplete='off' onChange={handleChange} type="text" placeholder={note.info.url} />
            <input name='title' className='title-input' autoComplete='off' onChange={handleChange} type="text" placeholder={note.info.title} />
        </div>
    )
}
