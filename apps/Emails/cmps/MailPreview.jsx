const { Link } = ReactRouterDOM
import { mailsService } from '../services/mails-service.js'

export class MailPreview extends React.Component {
    state = {
        isMailHasImg: false,
        isMailHasVideo: false,
        isMailRead: false,
    }

    componentDidMount() {
        const { mail } = this.props;
        this.setState({ isMailHasImg: mail.isMailHasImg, isMailHasVideo: mail.isMailHasVideo, isMailRead: mail.isRead })
    }

    checkIfRead = (mail) => {
        if (!mail.isRead) return "un-read"
    }

    checkIfMailOpen = (mail) => {
        if (!mail.isOpen) return 'row-disply-none'
    }

    setFirstLetterSymbol = (name) => {
        return `apps/Emails/assets/img/letters/${name.charAt(0).toUpperCase()}.png`
    }

    toggleIsRead = (mail) => {
        mailsService.toggleIsRead(mail.id).then(() => {
            this.setState({ ...this.state, isMailRead: !this.state.isMailRead })
        })
    }

    render() {
        const { mail, } = this.props;
        return (
            <React.Fragment>
                <tr className={`mail-preview ` + this.checkIfRead(mail)} onClick={(ev) => this.props.toggleMailShow(mail, ev)}>
                    <td className="mail-letter-symbol">
                        <img className="img-mail-letter-symbol" src={this.setFirstLetterSymbol(mail.sendfrom)} alt="" ></img>
                    </td>
                    <td className="mail-send-form">{mail.sendfrom}</td>
                    <td className="mail-title">{mail.title}</td>
                    <td className="fas fa-trash fa-lg" onClick={(ev) => this.props.OnRemoveMail(mail, ev)}></td>
                    <td className="mail-send-at">{mail.sentAt}</td>
                </tr>
                <tr className={`mail-header ` + this.checkIfMailOpen(mail)}>
                    <td className="mail-title" colSpan="3">{mail.title}</td>
                    <td className="btn-close" onClick={(ev) => this.props.toggleMailShow(mail, ev)}><i className="fas fa-times"></i></td>
                    <td className="mail-details" >
                        <Link className="mail-details" to={`/misterEmail/${mail.id}`}><i className="fas fa-expand"></i></Link></td>
                </tr>
                <tr className={`mail-body ` + this.checkIfMailOpen(mail)}>
                    <td className="mail-send-from" >{mail.sendfrom}</td>
                    <td className="mail-address-from" colSpan="1">{mail.mailAddress}</td>
                    {this.state.isMailRead && <td colSpan="3" onClick={(ev) => this.toggleIsRead(mail)}><i className="fas fa-envelope-open"></i></td>}
                    {!this.state.isMailRead && <td colSpan="3" onClick={(ev) => this.toggleIsRead(mail)}><i className="fas fa-envelope"></i></td>}
                </tr>
                <tr className={`mail-body ` + this.checkIfMailOpen(mail)}>
                    <td className="mail-body" colSpan="5" >{mail.body}</td>
                    {this.state.isMailHasImg && <td><img className='preview-img' src={`${mail.imgUrl}`} alt="" /></td>}
                    {this.state.isMailHasVideo && <td><iframe width="85%" src={`https://www.youtube.com/embed/${mail.videoSrc}?controls=0`} frameBorder="0"></iframe></td>}
                </tr>
            </React.Fragment>
        )
    }
}
