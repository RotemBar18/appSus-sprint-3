import { CarPreview } from './CarPreview.jsx'
export function CarList({ cars }) {
  return (
    <div className="car-list">
      { cars.map(car => <CarPreview car={car} key={car.id} />)}
    </div>
  )
}