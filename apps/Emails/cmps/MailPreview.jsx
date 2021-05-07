export function MailPreview({ mail, selectedMail, toggleMailShow }) {

    function checkIfRead(mail) {
        if (!mail.isRead) return "un-read"
    }

    function checkIfMailOpen(mail) {
        if (!mail.isOpen) return 'row-disply-none'
    }

    function setFirstLetterSymbol(name) {
        return `apps/Emails/assets/img/letters/${name.charAt(0).toUpperCase()}.png`
        // return "../assets/img/letters/A.png"
    }

    return (
        <React.Fragment>
            <tr className={`mail-preview ` + checkIfRead(mail)} onClick={() => toggleMailShow(mail)}>
                <td className="mail-letter-symbol">
                    <div className="img-mail-letter-container flex">
                    <img className="img-mail-letter-symbol" src={setFirstLetterSymbol(mail.sendfrom)} alt="" ></img>
                    </div>
                </td>
                <td className="mail-send-form">{mail.sendfrom}</td>
                <td className="mail-title">{mail.title}</td>
                <td className="mail-send-at" colSpan="2">{mail.sentAt}</td>
            </tr>
            <tr className={`mail-header ` + checkIfMailOpen(mail)}>
                <td className="mail-title" colSpan="4">{mail.title}</td>
                <td className="btn-close" onClick={() => toggleMailShow(mail)}>X</td>
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
