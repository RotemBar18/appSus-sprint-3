
export function EditSrc({ note, handleChange }) {

    return (
        <div className='dynamic-edit-container'>
            <input name='videoId' className='videoId-input' autoComplete='off' onChange={handleChange} type="text" placeholder='enter YouTube video ID' />
        </div>
    )
}
