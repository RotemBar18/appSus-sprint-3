import { AddMail } from './AddMail.jsx'

export class MailsSideBar extends React.Component {

  state = {
    isAddMailShow: false,
  }

  toggleAddMail = () => {
    this.setState({isAddMailShow : !this.state.isAddMailShow})
  }

  render() {
    const { isAddMailShow } = this.state
    return (
      <nav className="side-bar">
        <ul className=" bar-content clean-list">
          <li className="active-nav">
            <button className="btn-search" onClick={() => this.toggleAddMail()}>+ New mail</button>
          </li>
          <li className="active-nav" onClick={() => this.props.showFilterByProperties('isInbox')}>Inbox</li>
          <li className="active-nav" onClick={() => this.props.showFilterByProperties('isStarred')}>Starred</li>
          <li className="active-nav"onClick={() => this.props.showFilterByProperties('isSendMail')}>Sent Mail</li>
          <li className="active-nav"onClick={() => this.props.showFilterByProperties('isDraft')}>Drafts</li>
          {isAddMailShow && <React.Fragment>
            <AddMail toggleAddMail={this.toggleAddMail}></AddMail>
          </React.Fragment>}
        </ul>
      </nav>
    )
  }
}