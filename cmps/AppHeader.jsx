import { UserMsg } from '../cmps/UserMsg.jsx'

const { NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {

  render() {

    return (
      <nav className="app-header">
        <h1>Our new website</h1>
        <ul className="clean-list">
          <li><NavLink exact to="/" activeClassName="active-nav">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/missBook">missBook</NavLink></li>
          <li><NavLink to="/misterEmail">misterEmailk</NavLink></li>
          <li><NavLink to="/missKeep">missKeep</NavLink></li>

        </ul>
        <UserMsg />
      </nav>
    )
  }
}

export const AppHeader = withRouter(_AppHeader)