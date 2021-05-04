const { Link } = ReactRouterDOM
export function CarPreview({ car }) {
  return (
    <Link to={`/car/${car.id}`}>
      <article className="car-preview">
        <img src={'https://robohash.org/' + car.vendor} alt="" />
        <p>Vendor - {car.vendor}</p>
        <p>Speed - {car.speed}</p>
      </article>
    </Link>
  )
}