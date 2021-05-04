import { eventBusService } from '../services/event-bus-service.js'


export class UserMsg extends React.Component {

  removeEvent;

  state = {
    msg: null
  }

  componentDidMount() {
    // Here we listen to the event that we emited, its important to remove the listener 
    this.removeEvent = eventBusService.on('show-modal', (msg) => {
      this.setState({ msg })
    })
  }

  componentWillUnmount() {
    this.removeEvent()
  }

  render() {
    if (!this.state.msg) return <span></span>
    const msgClass = this.state.msg.type || ''
    return (
      <section className='modal' onClick={() => {
        this.setState({ msg: null })
      }}>
      <div className={'user-msg ' + msgClass}>
        {this.state.msg.txt}
      </div>
        </section>
    )
  }
}
