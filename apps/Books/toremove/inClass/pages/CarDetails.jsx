const { Link } = ReactRouterDOM
import { carService } from '../services/car-service.js'

export class CarDetails extends React.Component {
  state = {
    car: null
  }

  componentDidMount() {
    this.loadCar()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.carId !== this.props.match.params.carId) {
      this.loadCar()
    }
  }

  loadCar() {
    const id = this.props.match.params.carId
    carService.getCarById(id).then(car => {
      if (!car) return this.props.history.push('/')
      this.setState({ car })
    })
  }
  onDeleteCar = () => {
    carService.deleteCar(this.state.car.id)
      .then(() => {
        this.props.history.push('/car')
      })
  }
  render() {
    const { car } = this.state
    if (!car) return <div>Loading...</div>
    return (
      <div className="car-details" >
        <button onClick={() => this.props.history.push('/car')} > Go back</button>
        <img src={'https://robohash.org/' + car.vendor} alt="" />
        <p>Vendor - {car.vendor}</p>
        <p>Speed - {car.speed}</p>
        { car.desc}
        <div className="actions">

          <button onClick={this.onDeleteCar}>Delete Car</button>
          <Link to={`/car/edit/${car.id}`}>Edit</Link>
          <Link to={`/car/${carService.getNextCarId(car.id)}`}>Next Car</Link>
        </div>
      </div >
    )
  }
}