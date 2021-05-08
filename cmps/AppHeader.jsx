import { UserMsg } from '../cmps/UserMsg.jsx'

const { NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {

state = {
    isManuShow: false
  }

  toggleMenu = () => {
        this.setState({isManuShow: !this.state.isManuShow})
}


  render() {

    return (
      <section className="app-header flex">
        <h1>AppSus</h1>
        <i className="btn-app-header fas fa-th fa-lg" onClick={this.toggleMenu}></i>
        <nav className="nav-app-header" onClick={this.toggleMenu}>
         {this.state.isManuShow && <ul className="contant clean-list grid">
            <li><NavLink exact to="/" activeClassName="active-nav"><i className="fas fa-home"></i>Home</NavLink></li>
            <li><NavLink to="/about">
            <i className="fas fa-address-card"></i>About</NavLink></li>
            <li><NavLink to="/missBook">
            <i className="fas fa-book-open"></i>missBook</NavLink></li>
            <li><NavLink to="/misterEmail"> 
            <i className="fas fa-envelope"></i>MisterMail</NavLink></li>
            <li><NavLink to="/missKeep">
            <i className="fas fa-sticky-note"></i>MissKeep</NavLink></li>
            <li><i className="fas fa-map-marker-alt"></i>Maps</li>

          </ul>}
          <UserMsg />
        </nav>
      </section>
    )
  }
}

export const AppHeader = withRouter(_AppHeader)