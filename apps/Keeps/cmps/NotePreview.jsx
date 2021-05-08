import { NoteEditor } from './NoteEditor.jsx'
import { DynamicNoteCmp } from './DynamicNoteCmp.jsx'

export class NotePreview extends React.Component {

    state = {
        isEditorOpen: false,
    }



    openEditor = (note) => {
        this.setState({ selectedNote: note }, () => {
            this.setState({ isEditorOpen: true })
        })
    }

    closeEditor = () => {
        this.setState({ isEditorOpen: false })
        // this.setState({ selectedNote: null })
    }

    render() {

        const { note, onDeleteNote, onToggleTodo, pinNote, copyNote, renderEdited } = this.props
        const { isEditorOpen } = this.state
        return (
            <React.Fragment>
                <article className="note-container">
                    <DynamicNoteCmp note={note} onToggleTodo={onToggleTodo} openEditor={this.openEditor} />
                {
                    isEditorOpen &&
                    <NoteEditor onDeleteNote={onDeleteNote} pinNote={pinNote} copyNote={copyNote} closeEditor={this.closeEditor} renderEdited={renderEdited} note={note} />
                }
                </article>
            </React.Fragment >
        )
    }
}