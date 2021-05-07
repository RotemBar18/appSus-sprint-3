import { NotesList } from './cmps/NotesList.jsx'
import { AddNote } from './cmps/AddNote.jsx'
import { noteService } from './services/note-service.js'
import { NoteEditor } from './cmps/NoteEditor.jsx'
import { NoteSearch } from './cmps/NoteSearch.jsx'

export class KeepApp extends React.Component {
    state = {
        newNoteContent: '',
        newNoteType: 'NoteText',
        notes: null,
        searchBy: null
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes() {
        noteService.query(this.state.searchBy).then((notes) => {
            this.setState({ notes },console.log(notes))
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



    onSetSearch = (searchBy) => {
        this.setState({ searchBy }, this.loadNotes)
    }

    onToggleTodo = (todo) => {
        console.log(todo);
        noteService.toggleTodo(todo).then(
            this.loadNotes()
        )
    }

    renderEdited = () => {
        this.loadNotes()
    }

    onPinNote = (note) => {
        noteService.pinNote(note)
        this.loadNotes()
    }

    OnCopyNote = (note) => {
        noteService.copyNote(note).then(()=> this.loadNotes())
    }




    render() {
        const { notes } = this.state
        if (!notes) return <div>Loading...</div>
        return (
            <section className="note-app">
                <AddNote newNoteType={this.state.newNoteType} handleChange={this.handleChange} onAddNote={this.onAddNote} onSubmit={this.onSubmit} />
                <NoteSearch onSetSearch={this.onSetSearch} />
                <h2>My Notes</h2>
                <NotesList copyNote={this.OnCopyNote}
                    closeEditor={this.closeEditor}
                    renderEdited={this.renderEdited}
                    handleColorChange={this.handleColorChange}
                    pinNote={this.onPinNote}
                    onToggleTodo={this.onToggleTodo}
                    onDeleteNote={this.onDeleteNote}
                    openEditor={this.openEditor}
                    notes={notes}
                    setSelectedNote={this.setSelectedNote} />
            </section>
        )
    }
}