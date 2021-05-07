import { EditText } from './EditText.jsx'
import { EditTitle } from './EditTitle.jsx'
import { EditLabel } from './EditLabel.jsx'
import { EditSrc } from './EditSrc.jsx'

export function DynamicEditCmp({ note, handleChange }) {

    const renderCmp = (note, handleChange) => {
        console.log(note);
        switch (note.type) {
            case 'NoteText':
                return <EditText note={note} handleChange={handleChange} />
            case 'NoteImg':
                return <EditTitle note={note} handleChange={handleChange} />
            case 'NoteTodos':
                return <EditLabel note={note} handleChange={handleChange} />
            case 'NoteVideo':
                return <EditSrc note={note} handleChange={handleChange} />

            default:
                return console.log('error Note Type is undefined or something else...')
        }
    }

    return (
        renderCmp(note, handleChange)
    )
}


