import { carService } from '../services/car-service.js'

export class CarEdit extends React.Component {
  state = {
    car: {
      vendor: '',
      speed: ''
    }
  }
  componentDidMount() {
    const id = this.props.match.params.carId
    if (!id) return
    carService.getCarById(id).then(car => {
      this.setState({ car })
    })
  }
  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    this.setState(prevState => ({
      car: {
        ...prevState.car,
        [field]: value
      }
    }))
  }
  onSaveCar = (ev) => {
    ev.preventDefault()
    const { car } = this.state
    if (!car.vendor) return alert('Must fill vendor field')
    carService.saveCar(this.state.car).then(() => {
      this.props.history.push('/car')
    })
  }

  render() {
    const { vendor, speed, id } = this.state.car
    return (
      <form className="car-edit" onSubmit={this.onSaveCar}>
        <h1>{id ? 'Edit' : 'Add'} Car</h1>
        <label>Vendor
          <input type="text" name="vendor" value={vendor} onChange={this.handleChange} />
        </label>
        <label>Speed
          <input type="number" name="speed" value={speed} onChange={this.handleChange} />
        </label>
        <button>Save</button>
      </form>
    )
  }
}