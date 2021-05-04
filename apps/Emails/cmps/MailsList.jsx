import { MailPreview } from './MailPreview.jsx'
export function MailsList({ mails, selectedMail, toggleMailShow }) {
    return (
        <div className="mails-list">
            <table className="list clean-list">
                <tbody>
                    {mails.map(mail => <MailPreview mail={mail} key={mail.id} selectedMail={selectedMail} toggleMailShow={toggleMailShow}/>)}
                </tbody>
            </table>
        </div>
    )
}