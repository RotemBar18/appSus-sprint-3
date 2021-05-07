
export function EditText({ note, handleChange }) {

    return (
        <div className='dynamic-edit-container'>
            <input name='txt' className='txt-input' autoComplete='off' onChange={handleChange} type="text" placeholder={note.info.txt} />
        </div>
    )


}
