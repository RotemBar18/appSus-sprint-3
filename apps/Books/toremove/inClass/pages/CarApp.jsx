const { Link } = ReactRouterDOM
import { carService } from '../services/car-service.js'
import { eventBusService } from '../services/event-bus-service.js'
import { CarList } from '../cmps/CarList.jsx'
import { CarFilter } from '../cmps/CarFilter.jsx'

export class CarApp extends React.Component {
    state = {
        cars: null,
        filterBy: null,
    }
    componentDidMount() {
        this.loadCars()
    }

    loadCars() {
        carService.query(this.state.filterBy)
            .then((cars) => {
                console.log(cars);
                this.setState({ cars })
                eventBusService.emit('car-count', cars.length)
            })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadCars)
    }

    render() {
        const { cars } = this.state

        if (!cars) return <div>Loading...</div>
        return (
            <section className="car-app">
                <CarFilter onSetFilter={this.onSetFilter} />
                <CarList cars={cars} />

                <Link className="add-btn" to="/car/edit">Add Car</Link>
            </section>
        )
    }
}