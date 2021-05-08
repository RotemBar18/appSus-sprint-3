import { noteService } from '../../Keeps/services/note-service.js';
import { mailsService } from '../services/mails-service.js'
export class mailDetails extends React.Component {

    state = {
        mail: null
    }

    componentDidMount() {
        const mailId = this.props.match.params.mailId;
        this.getMailDetails(mailId)
    }

    getMailDetails(mailId) {
        mailsService.getMailDetails(mailId).then((mail) => {
            this.setState({ mail })
        })
    }

    goBack = () => {
        this.props.history.push('/misterEmail')
    }

    onCreateEmailNote = (mail) => {
        noteService.createEmailNote(mail)
    }

    render() {
        const { mail } = this.state
        if (!mail) return <div>Loading...</div>
        return <div className="mail-details flex" >
            <table className="details-table clean-list">
                <tbody>
                    <tr className='mail-header '>
                        <td className="mail-title" colSpan="2">{mail.title}</td>
                        <td className="btn-close" ><i className="fas fa-compress" onClick={this.goBack}></i></td>
                        <td className="btn-close" ><i className="far fa-sticky-note" onClick={() => { this.onCreateEmailNote(mail) }}></i></td>
                    </tr>
                    <tr className='mail-details-body'>
                        <td className="mail-body" colSpan="4">{mail.body}</td>
                    </tr>
                    <tr className='mail-body'>
                        <td className="mail-send-from">{mail.sendfrom}</td>
                        <td className="mail-address-from" colSpan="3">{mail.mailAddress}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    }
}