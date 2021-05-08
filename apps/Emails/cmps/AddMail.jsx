import { mailsService } from '../services/mails-service.js'
import { MailAddressesInput } from './MailAddressesInput.jsx'
export class AddMail extends React.Component {
    state = {
        addedMail: {
            sendTo: '',
            title: '',
            body: '',
        }
    }

    handleChange = ev => {
        const { value } = ev.target;
        const key = ev.target.name;
        this.setState(prevState => ({
            addedMail: {
                ...prevState.addedMail,
                [key]: value,
            },
        }));
    };

    onSubmit = ev => {
        ev.preventDefault();
        mailsService.addMail(this.state.addedMail, false, true).then(this.props.toggleAddMail)
    }

    getMailAddresses = (addresses) => {
        this.setState(prevState => ({
            addedMail: {
                ...prevState.addedMail,
                sendTo: [...this.state.addedMail.sendTo, addresses],
            },
        }));
    }

    onSaveToDraft = () => {
        mailsService.addMail(this.state.addedMail, true, false).then(this.props.toggleAddMail)
    }

    render() {
        const { mails, filterBy } = this.state
        return (
            <section className='add-mails-section'>
                <div className="add-mail-modal">
                    <div className='header flex'>
                        <p className='add-mail-title'>New mail</p>
                        <button className='btn-add-mail-close' onClick={this.props.toggleAddMail}><i className="fas fa-times"></i></button>
                    </div>

                    <form className='add-mail-form' onSubmit={this.onSubmit}>
                        <div className='flex address'>
                            <label htmlFor="address-from">From:</label>
                            <input type="text" defaultValue="hilaTeamRole@gmail.com" name="address-from" readOnly />
                        </div>
                        <div className='flex address'>
                            <MailAddressesInput getMailAddresses={this.getMailAddresses}></MailAddressesInput>
                        </div>
                        <div className='flex title'>
                            <label htmlFor="title">Title:</label>
                            <input type="text" name="title" placeholder="Enter title" onChange={this.handleChange} required />
                        </div>
                        <textarea className='add-mail-body' name="body" id="" cols="40" rows="10" onChange={this.handleChange}></textarea>
                        <div className="flex space-between">
                            <button type="Submit" className="btn-add-mail-modal">Send</button>
                            <button type="button" className="btn-add-mail-save-modal" onClick={this.onSaveToDraft}>Save</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}