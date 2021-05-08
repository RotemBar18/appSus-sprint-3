import { mailsService } from '../../Emails/services/mails-service.js'
import { noteService } from '../services/note-service.js'
import { BgcPalette } from './BgcPalette.jsx'
import { DynamicEditCmp } from './DynamicEditCmp.jsx'

export class NoteEditor extends React.Component {

    state = {
        isDynamicEditCmpOpen: false,
        isPaletteOpen: false,
        inputs: {
            bgc: '',
            url: '',
            videoId: '',
            title: '',
            txt: '',
            label: '',
            todoTxt: '',
            emailTitle: '',
            emailBody: '',
        },
    }

    componentDidMount() {
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState({ inputs: { ...this.state.inputs, [field]: value } }, () => {
            this.onSaveChanges()
        })

    }

    setColor = (color) => {
        this.setState({ inputs: { ...this.state.inputs, bgc: color } }, () => {
            this.onSaveChanges()
        })
    }

    onSaveChanges = () => {
        noteService.updateNote(this.props.note.id, this.state.inputs)
            .then(this.props.renderEdited)
    }

    onSendNoteToMail = (note) => {
        mailsService.sendNoteToMail(note)
    }

    render() {
        const note = this.props.note
        const { isPaletteOpen, isDynamicEditCmpOpen } = this.state

        return (
            <React.Fragment>
                <div className={`note-editor`}  >
                    {isDynamicEditCmpOpen &&
                        <DynamicEditCmp note={note} handleChange={this.handleChange} />
                    }
                    {isPaletteOpen &&
                        <BgcPalette setColor={this.setColor} />
                    }

                    <img className='pin-btn' onClick={() => { this.props.pinNote(note) }} src="./assets/img/pin.png" alt="" />
                    <img className='edit-txt-btn' onClick={() => { this.setState({ isDynamicEditCmpOpen: !isDynamicEditCmpOpen }) }} src="./assets/img/text.png" alt="" />
                    <img className='remove-btn' onClick={() => { this.props.onDeleteNote(note.id) }} src="./assets/img/trash.png" alt="" />
                    <img className='bgc-palette-btn' onClick={() => { this.setState({ isPaletteOpen: !isPaletteOpen }) }} src="./assets/img/clrPalette.png" alt="" />
                    <img className='copy-btn' onClick={() => { this.props.copyNote(note) }} src="./assets/img/copy.png" alt="" />
                    <img className='to-email-btn' onClick={() => { this.onSendNoteToMail(note) }} src="./assets/img/send-email.png" alt="" />
                    <button className='close-editor-btn' onClick={this.props.closeEditor}>x</button>




                </div>
            </React.Fragment>
        )

    }
}
