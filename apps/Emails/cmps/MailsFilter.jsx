export class MailsFilter extends React.Component {

    state = {
        filterBy: {
            text: '',
            date: '',
            title: '',
            from:'',
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value;
        // const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { text, date } = this.state.filterBy
        return (
            <form className="mail-filter" onSubmit={this.onFilter}>
                <label htmlFor="byName"></label>
                <input type="text" id="byName`" name="text" value={text} placeholder="Search text..." onChange={this.handleChange} />

                {/* <label htmlFor="minPrice"></label>
                <input type="number" id="minPrice" name="minPrice" value={minPrice} placeholder="Search minSpeed..." onChange={this.handleChange} />

                <label htmlFor="maxPrice"></label>
                <input type="number" id="maxPrice" name="maxPrice" value={maxPrice} placeholder="Search maxSpeed..." onChange={this.handleChange} /> */}

                <label for="filter-by"></label>
                <select className="filter-by" name="filter-by" id="filter-by">
                    <option value="text">text</option>
                    <option value="date">date</option>
                    <option value="title">title</option>
                    <option value="from">from</option>
                </select>
            </form>
        )
    }
}