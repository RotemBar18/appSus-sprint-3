import { NotesList } from './cmps/NotesList.jsx'
import { AddNote } from './cmps/AddNote.jsx'
import { noteService } from './services/note-service.js'
import { NoteEditor } from './cmps/NoteEditor.jsx'

export class KeepApp extends React.Component {
    state = {
        newNoteContent: '',
        newNoteType: 'NoteText',
        notes: null,
        selectedNote: null,
        isEditorOpen: false
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes() {
        noteService.query()
            .then((notes) => {
                this.setState({ notes })
            })
    }

    handleChange = (ev) => {
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState({ newNoteContent: value })
    }

    DynamicCmp = (props) => {
        switch (currView) {
            case 'Hello':
                return <Hello {...props} />
            case 'GoodBye':
                return <GoodBye {...props} />
            case 'WelcomeBack':
                return <WelcomeBack {...props} />
            default:
                return //...some default error view
        }
    }


    onAddNote = () => {
        noteService.createNote(this.state.newNoteType, this.state.newNoteContent)
            .then(notes => {
                this.setState({ notes })
            })
        this.setState({ newNoteType: 'NoteText' })
    }

    onSubmit = (type) => {
        this.setState({ newNoteType: type })
    }

    onDeleteNote = (noteId) => {
        noteService.deleteNote(noteId)
            .then(notes => {
                this.setState({ notes })
            })
    }

    openEditor = (note) => {
        console.log(note);
        this.setState({ selectedNote: note }, () => {
            this.setState({ isEditorOpen: true })
        })
    }


    closeEditor = () => {
        this.setState({ isEditorOpen: false })
        this.setState({ selectedNote: null })
    }


    render() {
        const { notes, selectedNote, isEditorOpen } = this.state
        if (!notes) return <div>Loading...</div>
        return (
            <section className="note-app">
                <AddNote newNoteType={this.state.newNoteType} handleChange={this.handleChange} onAddNote={this.onAddNote} onSubmit={this.onSubmit} />
                <h2>My Notes</h2>
                {!selectedNote && <React.Fragment>
                    <NotesList onDeleteNote={this.onDeleteNote} openEditor={this.openEditor} notes={notes} setSelectedNote={this.setSelectedNote} />
                </React.Fragment>}
                {isEditorOpen && <NoteEditor note={this.state.selectedNote} closeEditor={this.closeEditor} />}
            </section>
        )
    }
}