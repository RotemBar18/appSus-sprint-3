const { Link } = ReactRouterDOM

export function MailPreview({ mail, selectedMail, toggleMailShow, OnRemoveMail  }) {

    function checkIfRead(mail) {
        if (!mail.isRead) return "un-read"
    }

    function checkIfMailOpen(mail) {
        if (!mail.isOpen) return 'row-disply-none'
    }

    function setFirstLetterSymbol(name) {
        return `apps/Emails/assets/img/letters/${name.charAt(0).toUpperCase()}.png`
    }


    return (
        <React.Fragment>
            <tr className={`mail-preview ` + checkIfRead(mail)} onClick={(ev) => toggleMailShow(mail, ev)}>
                <td className="mail-letter-symbol">
                    <img className="img-mail-letter-symbol" src={setFirstLetterSymbol(mail.sendfrom)} alt="" ></img>
                </td>
                <td className="mail-send-form">{mail.sendfrom}</td>
                <td className="mail-title">{mail.title}</td>
                <td className="fas fa-trash fa-lg" onClick={(ev) => OnRemoveMail(mail, ev)}></td>
                <td className="mail-send-at" >{mail.sentAt}</td>
            </tr>
            <tr className={`mail-header ` + checkIfMailOpen(mail)}>
                <td className="mail-title" colSpan="3">{mail.title}</td>
                <td className="btn-close" onClick={(ev) => toggleMailShow(mail, ev)}><i className="fas fa-times"></i></td>
                <td className="mail-details" >
                    <Link className="mail-details" to={`/misterEmail/${mail.id}`}><i className="fas fa-expand"></i></Link></td>
            </tr>
            <tr className={`mail-body ` + checkIfMailOpen(mail)}>
                <td className="mail-send-from" >{mail.sendfrom}</td>
                <td className="mail-address-from" colSpan="4">{mail.mailAddress}</td>
            </tr>
            <tr className={`mail-body ` + checkIfMailOpen(mail)}>
                <td className="mail-body" colSpan="5">{mail.body}</td>
            </tr>
        </React.Fragment>
    )
}
