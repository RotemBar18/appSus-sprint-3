import { mailsService } from './services/mails-service.js'
import { MailsList } from './cmps/MailsList.jsx'
import { MailsSideBar } from './cmps/MailsSideBar.jsx'
import { MailsFilter } from './cmps/MailsFilter.jsx'

export class EmailApp extends React.Component {
    state = {
        mails: null,
        filterBy: null,
        filterByProperty: 'isInbox',
        selectedMail: null,
    }
    componentDidMount() {
        this.loadMails()
    }

    loadMails() {
        mailsService.query(this.state.filterBy, this.state.filterByProperty)
            .then((mails) => {
                this.setState({ mails })
            })
    }

    setSelectedMail = (mail) => {
        this.setState({ selectedMail: mail })
    }

    toggleMailShow = (mail, ev) => {
        if ('fas fa-trash fa-lg' === ev.target.className) return
        mailsService.toggleMailShow(mail.id).then((mails) => {
            this.setState({ mails })
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadMails)
    }

    showFilterByProperties = (filterByProperty) => {
        this.setState({ filterByProperty }, this.loadMails)
    }

    OnRemoveMail = (mail, ev) => {
        mailsService.removeMail(mail.id).then((mails) => {
            this.setState({ mails })
        })
    }


    render() {
        const { mails, selectedMail } = this.state
        if (!mails) return <div>Loading...</div>
        return (
            <section className="mail-app">
                <div className="mail-container flex"></div>
                <MailsFilter onSetFilter={this.onSetFilter} />
                <MailsSideBar mails={mails} showFilterByProperties={this.showFilterByProperties} ></MailsSideBar>
                <MailsList mails={mails} setSelectedMail={this.setSelectedMail} toggleMailShow={this.toggleMailShow} OnRemoveMail={this.OnRemoveMail} />
            </section>
        )
    }
}
