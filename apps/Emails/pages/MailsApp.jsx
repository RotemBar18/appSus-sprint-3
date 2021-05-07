import { mailsService } from '../services/mails-service.js'
import { MailsList } from '../cmps/MailsList.jsx'
// import { MailDeatails } from './MailDeatails.jsx'
import { MailsFilter } from '../cmps/MailsFilter.jsx'

export class AppEmail extends React.Component {
    state = {
        mails: null,
        filterBy: null,
        selectedMail: null
    }
    componentDidMount() {
        this.loadMails()
    }

    loadMails() {
        mailsService.query(this.state.filterBy)
            .then((mails) => {
                this.setState({ mails })
            })
    }

    setSelectedMail = (mail) => {
        this.setState({ selectedMail: mail })
    }

    toggleMailShow = (mail) =>{
        mailsService.toggleMailShow(mail.id).then((mails) => {
            this.setState({ mails })
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadMails)
    }
    render() {
        const { mails, selectedMail } = this.state
        if (!mails) return <div>Loading...</div>
        return (
            <section className="mail-app">
                <h2>My Mails</h2>
                {!selectedMail && <React.Fragment>
                    <MailsFilter onSetFilter={this.onSetFilter} />
                    <MailsList mails={mails} setSelectedMail={this.setSelectedMail} toggleMailShow={this.toggleMailShow} />
                </React.Fragment>}
                {/* {selectedMail &&
                    <MailDeatails mail={selectedMail} goBack={() => this.setSelectedMail(null)} />} */}
            </section>
        )
    }
}