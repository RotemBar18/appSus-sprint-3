import { eventBusService } from '../services/event-bus-service.js'

const { NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {

  removeEvent;

  state = {
    carCount: 0
  }

  componentDidMount() {
    // Here we listen to the event that we emited, its important to remove the listener 
    this.removeEvent = eventBusService.on('car-count', (carCount) => {
      this.setState({ carCount })
    })
  }

  componentWillUnmount() {
    this.removeEvent()
  }

  render() {

    return (
      <nav className="app-header">
        <h1>Cars R Us</h1>
        <ul className="clean-list">
          <li><NavLink exact to="/" activeClassName="active-nav">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><button onClick={() => {
            this.props.history.goBack()
          }}>Back</button></li>
        </ul>
        <span>
          Number of cars {this.state.carCount}
        </span>
      </nav>
    )
  }
}

export const AppHeader = withRouter(_AppHeader)