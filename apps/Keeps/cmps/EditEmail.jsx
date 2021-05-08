
export function EditEmail({ note, handleChange }) {

    return (
        <div className='dynamic-edit-container'>
            <input name='emailTitle' className='email-title-input' autoComplete='off' onChange={handleChange} type="text" placeholder={note.info.emailTitle} />
            <input name='emailBody' className='email-body-input' autoComplete='off' onChange={handleChange} type="text" placeholder={note.info.emailBody} />
        </div>
    )
}
