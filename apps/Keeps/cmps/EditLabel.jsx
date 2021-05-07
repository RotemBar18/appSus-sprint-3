
export function EditLabel({ note, handleChange }) {

    return (
        <div className='dynamic-edit-container'>
            <input name='label' className='label-input' autoComplete='off' onChange={handleChange} type="text" placeholder={note.info.label} />
        </div>
    )
}
