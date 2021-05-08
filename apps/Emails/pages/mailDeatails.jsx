import { mailsService } from '../services/mails-service.js'
export class mailDeatails extends React.Component {

    state = {
        mail: null
    }

    componentDidMount() {
        const mailId = this.props.match.params.mailId;
        this.getMailDeatails(mailId)
    }

    getMailDeatails(mailId) {
        mailsService.getMailDeatails(mailId).then((mail) => {
            this.setState({ mail })
        })
    }

    goBack = () => {
        this.props.history.push('/misterEmail')
    }

    render() {
        const { mail } = this.state
        if (!mail) return <div>Loading...</div>
        return <div className="mail-deatails flex" >
            <table className="deatails-table clean-list">
                <tbody>
                    <tr className='mail-header '>
                        <td className="mail-title" colSpan="1">{mail.title}</td>
                        <td className="btn-close" ><i className="fas fa-compress" onClick={this.goBack}></i></td>
                        <td className="btn-close" ><i className="far fa-sticky-note" onClick={this.goBack}></i></td>
                    </tr>
                    <tr className='mail-body'>
                        <td className="mail-send-from" colSpan="1">{mail.sendfrom}</td>
                        <td className="mail-address-from" colSpan="2">{mail.mailAddress}</td>
                    </tr>
                    <tr className='mail-body'>
                        <td className="mail-body" colSpan="3">{mail.body}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    }
}