const { NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {

  state = {
    carCount: 0
  }

  render() {

    return (
      <nav className="app-header">
        <h1>Books R Us</h1>
        <ul className=" header-content clean-list">
          <li><NavLink exact to="/" activeClassName="active-nav">Home</NavLink></li>
          <li><NavLink exact to="/book/addBook" activeClassName="active-nav">Add book</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><button onClick={() => {
            this.props.history.goBack()
          }}>Back</button></li>
        </ul>
      </nav>
    )
  }
}

export const AppHeader = withRouter(_AppHeader)