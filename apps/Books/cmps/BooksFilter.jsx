export class BooksFilter extends React.Component {

    state = {
        filterBy: {
            name: '',
            minPrice: '',
            maxPrice: ''
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { name, minPrice, maxPrice } = this.state.filterBy
        return (
            <form className="book-filter" onSubmit={this.onFilter}>
                <label htmlFor="byName"></label>
                <input type="text" id="byName`" name="name" value={name} placeholder="Search name..."  onChange={this.handleChange} />

                <label htmlFor="minPrice"></label>
                <input type="number" id="minPrice" name="minPrice" value={minPrice} placeholder="Search minSpeed..." onChange={this.handleChange} />

                <label htmlFor="maxPrice"></label>
                <input type="number" id="maxPrice" name="maxPrice" value={maxPrice} placeholder="Search maxSpeed..." onChange={this.handleChange} />
                <button>Filter</button>
            </form>
        )
    }
}