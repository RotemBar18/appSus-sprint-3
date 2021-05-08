import { AddMail } from './AddMail.jsx'

export class MailsSideBar extends React.Component {

  state = {
    isAddMailShow: false,
    isSideBarShow: false,
  }

  toggleSideBar = () => {
    this.setState({ isSideBarShow: !this.state.isSideBarShow })
  }

  toggleAddMail = () => {
    this.setState({ isAddMailShow: !this.state.isAddMailShow })
  }

  addHiddenClass = () => {
    if (this.state.isSideBarShow) return 'bar-content-show'
    return 'bar-content'
  }

  render() {
    const { isAddMailShow } = this.state
    return (
      <nav className="side-bar">
        <button className="btn-show-bar" onClick={() => this.toggleSideBar()}><i className="fas fa-bars"></i></button>
        <button className="btn-add-mail" onClick={() => this.toggleAddMail()}><i className="fas fa-plus"></i> New mail</button>
        <ul className={`clean-list ` + this.addHiddenClass()}>
          <li className="active-nav">
          </li>
          <li className="active-nav" onClick={() => this.props.showFilterByProperties('isInbox')}><i className="fas fa-inbox"></i> Inbox</li>
          <li className="active-nav" onClick={() => this.props.showFilterByProperties('isStarred')}><i className="fas fa-star"></i> Starred</li>
          <li className="active-nav" onClick={() => this.props.showFilterByProperties('isSendMail')}><i className="fas fa-paper-plane"></i> Sent Mail</li>
          <li className="active-nav" onClick={() => this.props.showFilterByProperties('isDraft')}><i className="fab fa-firstdraft"></i> Drafts</li>
        </ul>
          {isAddMailShow && <React.Fragment>
            <AddMail toggleAddMail={this.toggleAddMail}></AddMail>
          </React.Fragment>}
      </nav>
    )
  }
}